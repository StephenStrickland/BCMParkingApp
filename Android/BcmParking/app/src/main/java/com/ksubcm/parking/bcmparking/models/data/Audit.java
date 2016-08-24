package com.ksubcm.parking.bcmparking.models.data;

import java.util.Date;

import io.realm.RealmObject;

/**
 * Created by Stephen on 8/24/16.
 */

public class Audit extends RealmObject {
    private Date CreateDateTime;
    private String CreateUserId;
    private Date ModDateTime;
    private String ModUserId;
}
