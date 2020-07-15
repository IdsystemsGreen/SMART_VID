package augenblick.waspdata;

/**
 * Created by a507519 on 16/11/2017.
 */

public class SensorDataObject {

    private String frame;
    private String sensorName;
    private String sensorValue;
    private String timestamp;


    public SensorDataObject(String frame, String sensorName, String sensorValue, String timestamp) {
        this.frame = frame;
        this.sensorName = sensorName;
        this.sensorValue = sensorValue;
        this.timestamp = timestamp;
    }

    public String getFrame() {
        return frame;
    }

    public void setFrame(String frame) {
        this.frame = frame;
    }

    public String getSensorName() {
        return sensorName;
    }

    public void setSensorName(String sensorName) {
        this.sensorName = sensorName;
    }

    public String getSensorValue() {
        return sensorValue;
    }

    public void setSensorValue(String sensorValue) {
        this.sensorValue = sensorValue;
    }

    public String getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(String timestamp) {
        this.timestamp = timestamp;
    }
}
