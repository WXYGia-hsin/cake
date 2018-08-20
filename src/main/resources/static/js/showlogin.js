           var items=document.getElementsByClassName('item');
			var points=document.getElementsByClassName('point')
			var index=0;//index表示第几张图片在显示 -->第index张图片有active这个类名
			var time=0;
			var clear=function(){
				for(var i=0;i<4;i++){
					items[i].className="item";
					points[i].className="point";
					}
			}
			var goIndex=function(){
				clear();
				console.log(index)
				items[index].className="item active"
				points[index].className="point active"
			}
			var goPrev=function(){
				if (index>0) {
					index--;
				} else{
					index=3
				}
				goIndex();
			}
			var goNext=function(){
				if(index<3){
					index++;
				}else{
					index=0;
				}
				goIndex();
			}
			for(var i=0;i<4;i++){
				 points[i].addEventListener('click',function(){
				 	var pointIndex=this.getAttribute("data-index");
				   index=pointIndex;
				    goIndex();
				    time=0;
				 })
				
			}
			
//			1000ms  100*10跳转一次

//100ms执行一次
			setInterval(function(){
				 time++;
				 if(time==10){
				 	goNext();
				 	time=0;
				 }
			},100)
			