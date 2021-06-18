import { check, request, PERMISSIONS, RESULTS, Permission } from 'react-native-permissions'
import { Platform } from 'react-native'

let targetPermission = Platform.OS === 'ios' ? PERMISSIONS.IOS.LOCATION_ALWAYS : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION