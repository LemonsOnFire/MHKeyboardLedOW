overwolf.logitech.led.init(function(callback){
	if (callback.status=="success"){
		overwolf.logitech.led.setTargetDevice(overwolf.logitech.led.enums.LogitechDeviceLightingType[PerkeyRGB],result)
	}
});

function dragMove(){
	overwolf.windows.getCurrentWindow(function(result){
		if (result.status=="success"){
			overwolf.windows.dragMove(result.window.id);
		}
	});
};

function FlashKeysWhite(){
	var redPer,greenPer,bluePer = 100;
	var duration = 300;
	var interval = 500;
	overwolf.logitech.led.saveCurrentLighting(callback2);
	overwolf.logitech.led.flashLighting(redPer,greenPer,bluePer,duration,interval,callback3);
};