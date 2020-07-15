package augenblick.waspdata;

import android.support.v7.widget.RecyclerView;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import java.util.ArrayList;

/**
 * Created by a507519 on 06/08/2017.
 */
public class MyRecyclerViewAdapter extends RecyclerView.Adapter<MyRecyclerViewAdapter.DataObjectHolder>  {

    private static String LOG_TAG = "MyRecyclerViewAdapter";
    private ArrayList<SensorDataObject> mDataset;
    private static MyClickListener myClickListener;


    public static class DataObjectHolder extends RecyclerView.ViewHolder implements View.OnClickListener {

        TextView frame;
        TextView sensorName;
        TextView sensorValue;
        TextView timestamp;

        public DataObjectHolder(View itemView) {
            super(itemView);
            frame       = (TextView) itemView.findViewById(R.id.frame);
            sensorName  = (TextView) itemView.findViewById(R.id.textView1);
            sensorValue = (TextView) itemView.findViewById(R.id.textView2);
            timestamp   = (TextView) itemView.findViewById(R.id.timestamp);
            Log.i(LOG_TAG, "Adding Listener");
            itemView.setOnClickListener(this);
        }

        @Override
        public void onClick(View v) {
            myClickListener.onItemClick(getAdapterPosition(), v);
        }
    }

    public void setOnItemClickListener(MyClickListener myClickListener) {
        this.myClickListener = myClickListener;
    }

    public MyRecyclerViewAdapter(ArrayList<SensorDataObject> myDataset) {
        mDataset = myDataset;
    }

    @Override
    public DataObjectHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.card_view_row, parent, false);
        DataObjectHolder dataObjectHolder = new DataObjectHolder(view);
        return dataObjectHolder;
    }

    @Override
    public void onBindViewHolder(DataObjectHolder holder, int position) {

        holder.frame.setText(mDataset.get(position).getFrame());
        holder.sensorName.setText(mDataset.get(position).getSensorName());
        holder.sensorValue.setText(mDataset.get(position).getSensorValue());
        holder.timestamp.setText(mDataset.get(position).getTimestamp());
    }

    public void addItem(SensorDataObject dataObj, int index) {
        mDataset.add(index, dataObj);
        notifyItemInserted(index);
    }

    public void deleteItem(int index) {
        mDataset.remove(index);
        notifyItemRemoved(index);
    }

    @Override
    public int getItemCount() {
        return mDataset.size();
    }

    public interface MyClickListener {
        public void onItemClick(int position, View v);
    }
}
