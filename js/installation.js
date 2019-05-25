function System(os){
	if(os == 1){
		document.getElementById("install-os-detailed").innerHTML = " ";
		document.getElementById("install-os-detailed").innerHTML = "<h3>Windows</h3><h4>Creating an Install Drive</h4>You'll need a USB flash drive with at least 2 GB of free space and a program called Rufus.<br><div align='center'><br><button href='http://rufus.ie' target='_blank'><i class='fab fa-usb' style='color:white;'></i>&nbsp;&nbsp;Download Rufus</button></div><table><tr><td><img src='../img/installation/rufus.png' alt='Rufus screenshot'></td><td><ol><li>Open Rufus</li><li>Insert your USB drive and select it in the \"Device\" list</li><li>Select \"Disk or ISO image\" in the \"Boot selection\" list</li><li>Click \"SELECT\" to choose the ISO that you downloaded previously.</li><li>We generate a checksum (or hash sum) for MiOS images so you can verify your downloaded file. This ensures that you've received the full, complete download and that your install image is not corrupted in any way. Click the checksum icon next to \"SELECT\" and verify that the text next to \"SHA256\" matches the following hash:<br><p class='highlight'>a8c7b8c54aeb0889bb3245356ffcd95b77e9835ffb5ac56376a3b627c3e1950f</p></li><li>If the hashes match, click \"START\" and wait for the process to finish.</li></ol></td></tr></table>";
	}
	else if(os == 2){
		document.getElementById("install-os-detailed").innerHTML = " ";
		document.getElementById("install-os-detailed").innerHTML = "<h3>MacOS</h3><h4>Verifying your download</h4>Verifying your download is an important, but optional step. We generate a checksum (or hash sum) for MiOS images and we recommend that you verify that your download matches that checksum before trying to install. This ensures that you've received the full, complete download and that your install image is not corrupted in any way.";
	}
	else if(os == 3){
		document.getElementById("install-os-detailed").innerHTML = " ";
	}
	else{
		document.getElementById("install-os-detailed").innerHTML = " ";
		document.getElementById("install-os-detailed").innerHTML = "Oh, so you're messing with \"Inspect element\" option? No way here, bro!";
	}
}