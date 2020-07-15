package augenblick.waspdata;


import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;

import okhttp3.Call;
import okhttp3.Callback;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

public class MainActivity extends AppCompatActivity {

    private Button callWSbutton;
    private OkHttpClient client;

    private RecyclerView mRecyclerView;
    private RecyclerView.Adapter mAdapter;
    private RecyclerView.LayoutManager mLayoutManager;
    private static String LOG_TAG = "CardViewActivity";
    ArrayList<SensorDataObject> sensorDataset;
    SensorDataObject sensorDataObject;
    HashMap<String, String> sensorFullnamesMap;

    @Override
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        client = new OkHttpClient();

        mRecyclerView = (RecyclerView) findViewById(R.id.my_recycler_view);
        mRecyclerView.setHasFixedSize(true);
        mLayoutManager = new LinearLayoutManager(this);
        mRecyclerView.setLayoutManager(mLayoutManager);

        callWSbutton = (Button) findViewById(R.id.callWSButton);
        callWSbutton.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View view) {
                sensorDataset = new ArrayList<SensorDataObject>();
                getWebservice();
            }
        });

        // poner en una helper class static
        sensorFullnamesMap = new HashMap<String, String>();
        sensorFullnamesMap.put("LUM", "Luminosidad:");
        sensorFullnamesMap.put("PA", "Presión del Aire:");
        sensorFullnamesMap.put("TCB", "Temperatura:");
        sensorFullnamesMap.put("HUMB", "Humedad:");
        sensorFullnamesMap.put("PAR", "Radiación Solar:");
        sensorFullnamesMap.put("SOIL1", "Humedad del Suelo:");
        sensorFullnamesMap.put("ANE", "Veloc. Viento:");
        sensorFullnamesMap.put("WV", "Dirección Viento:");
        sensorFullnamesMap.put("BAT", "Nivel Bateria:");
        sensorFullnamesMap.put("TIME", "Fecha:");

    }

    private void getWebservice() {

        new Thread(new Runnable() {

            public void run() {


                    final Request request = new Request.Builder().url("http://192.168.1.100:8080/SensorDataRestService/rest/sensoData/sensorList").build();

                    client.newCall(request).enqueue(new Callback() {

                            @Override
                            public void onFailure(Call call, IOException e) {

                                runOnUiThread(new Runnable() {

                                    @Override
                                    public void run() {
                                        Toast.makeText(getApplicationContext(), "Failure !", Toast.LENGTH_LONG).show();
                                    }
                                });
                            }

                            @Override
                            public void onResponse(Call call, final Response response) {

                                                try {

                                                    String jsonData = response.body().string();
                                                    JSONArray jsonArray = new JSONArray(jsonData);
                                                    for (int i = 0; i < jsonArray.length(); i++) {

                                                        JSONObject jsonObject = jsonArray.getJSONObject(i);

                                                        String frameNumber = jsonObject.getString("frameNumber");
                                                        String sensorName  = jsonObject.getString("sensorName");
                                                        String sensorValue = jsonObject.getString("value");
                                                        String timestamp   = jsonObject.getString("timestamp");

                                                        sensorDataObject = new SensorDataObject(frameNumber, sensorFullnamesMap.get(sensorName), sensorValue, timestamp);
                                                        sensorDataset.add(sensorDataObject);
                                                    }

                                                    runOnUiThread(new Runnable() {
                                                        @Override
                                                        public void run() {
                                                            mAdapter = new MyRecyclerViewAdapter(sensorDataset);
                                                            mRecyclerView.setAdapter(mAdapter);
                                                            sensorDataset = null;
                                                        }
                                                    });

                                                }
                                                catch (IOException ioe) {
                                                    Toast.makeText(getApplicationContext(), "Error during get body !", Toast.LENGTH_LONG).show();
                                                }
                                                catch (JSONException e) {
                                                    Toast.makeText(getApplicationContext(), "JSON Exception !", Toast.LENGTH_LONG).show();
                                                    e.printStackTrace();
                                                }
                                                catch (Exception e) {
                                                    e.printStackTrace();
                                                    Log.e("Error", "Exception: " + e.getMessage());
                                                }
                            }

                    });

            }

        }).start(); // fin thread
    }

} // fin activity
