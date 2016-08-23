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
