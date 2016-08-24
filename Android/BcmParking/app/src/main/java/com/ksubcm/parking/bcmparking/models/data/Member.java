package com.ksubcm.parking.bcmparking.models.data;

import io.realm.RealmObject;
import io.realm.annotations.PrimaryKey;

/**
 * Created by Stephen on 8/24/16.
 */

public class Member extends RealmObject {
    @PrimaryKey
    private String MemberId;
    public Audit Audit;
    public ContactInformation ContactInformation;
}
