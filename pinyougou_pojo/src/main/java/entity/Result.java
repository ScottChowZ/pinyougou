package entity;

import java.io.Serializable;

/**
 * @author scott
 * @version 1.0
 * @description entity
 * @date 2018/4/23
 */
public class Result implements Serializable {
    private boolean success;
    private String message;

    public  Result(){

    }
    public  Result(boolean success,String message){
         this.success=success;
         this.message=message;
    }
    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
