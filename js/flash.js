function i(ur,w,h){
        document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" width="'+w+'" height="'+h+'"> ');
        document.write('<param name="movie" value="' + ur + '">');
        document.write('<param name="quality" value="high"> ');
        document.write('<param name="menu" value="false"> ');
        document.write('<embed src="' + ur + '" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="'+w+'" height="'+h+'"></embed> ');
        document.write('</object> ');
}

function i_op(ur,w,h){
        document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" width="'+w+'" height="'+h+'"> ');
        document.write('<param name="movie" value="' + ur + '">');
        document.write('<param name="quality" value="high"> ');
        document.write('<param name="wmode" value="transparent">  ');
        document.write('<embed src="' + ur + '" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="'+w+'" height="'+h+'"></embed> ');
        document.write('</object> ');
}