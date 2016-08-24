# BCMParkingApp
This app is used to manage parking at KSU BCM.

## API

### User
* UserId
* UserName
* Password
* MemberId

### LicensePlate
* LicenseId
* MemberId (!= null then member)
* LicensePlateNumber
* AuditDateTimes[]


### Member
  * MemberId
  * Audit{CreateDateime, ModDatetime, UserMod,....}
  * ContactInformation{}




### Dependencies
* Realm https://realm.io/docs/java/latest/



### Resources
* Project Structure http://blog.smartlogic.io/2013/07/09/organizing-your-android-development-code-structure

### TODO
* decide on which http library to use: http://square.github.io/okhttp/ or http://loopj.com/android-async-http/ or https://github.com/google/google-http-java-client
* decide on which JSON (de)serializer 
