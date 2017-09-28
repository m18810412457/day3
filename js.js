var lis = document.getElementsByTagName('header')[0];
var sps = lis.getElementsByTagName('span');
var ss = document.getElementsByTagName("section");
for(var i=0;i<sps.length;i++){
	sps[i].index = i;
	sps[i].onclick=function(){
		
		for(var j=0;j<sps.length;j++){
			ss[j].style.display = 'none';
			sps[j].className = '';
		}
		ss[this.index].style.display = 'block';
		this.className = 'bg';
	}
}