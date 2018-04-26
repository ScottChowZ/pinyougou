package entity;

import java.io.Serializable;
import java.util.List;

/**
 * @author scott
 * @version 1.0
 * @description entity
 * @date 2018/4/22
 */
public class PageResult implements Serializable{//用于网络传输
    private long total;//总记录数
    private List rows;//当前页结果
    public PageResult(){

    }
    public PageResult(long total,List rows ){
     this.total=total;
     this.rows=rows;
    }

    public long getTotal() {
        return total;
    }

    public void setTotal(long total) {
        this.total = total;
    }

    public List getRows() {
        return rows;
    }

    public void setRows(List rows) {
        this.rows = rows;
    }
}
