(function(){
    var Menuber=function(){
        this.el=document.querySelector("#sidebar ul");
        this.state='allClosed';
        this.el.addEventListener('click',function(e){
            e.stopPropagation();
        });
        this.menuList=document.querySelectorAll('#sidebar ul>li');
        var self=this;
        [].forEach.call(this.menuList,function(value,index,arr){
            value.addEventListener('click',function(e){
                var menuContentEl=document.getElementById(e.currentTarget.id+'-content');
                if(self.state==='allClosed'){
                    console.log('打开'+menuContentEl.id);
                    menuContentEl.style.top='0';
                    menuContentEl.style.left='-85px';
                    menuContentEl.className='nav-content';
                    menuContentEl.classList.add('menuContent-move-right');
                    self.state='hasOpened';
                    self.currentOpenMenuContent=menuContentEl;
                }else{
                    self.currentOpenMenuContent.className='nav-content';
                    self.currentOpenMenuContent.top='0';
                    self.currentOpenMenuContent.left='35px';
                    self.currentOpenMenuContent.classList.add('menuContent-move-left');
                    menuContentEl.className='nav-content';
                    menuContentEl.style.top='250px';
                    menuContentEl.style.left='35px';
                    menuContentEl.classList.add('menuContent-move-up');
                    self.state='allClosed';
                    console.log('关闭'+menuContentEl.id);
                }
            });
        });
    }
    var Sidebar=function(eId,closeBarId){
      this.state="opened";  
      this.menuber=new Menuber();
      this.el=document.getElementById(eId||'sidebar');
      this.closeBarEl=document.getElementById(closeBarId||'closeBar');
      this.el.addEventListener('click',function(event){
          if(event.target!==this.el){
              this.triggerSwitch();
          }
      }.bind(this));
      this.menuContentList=document.querySelectorAll('.nav-content>.nav-con-close');
      for (var i = 0,len=this.menuContentList.length; i < len; i++) {
        this.menuContentList[i].addEventListener('click',function(e){
            var menuContent=e.currentTarget.parentNode;
            menuContent.className='nav-content';
            menuContent.top='0';
            menuContent.left='35px';
            menuContent.classList.add('close-move-right');
            this.state='allClosed';
            console.log("sidebar详细页");
        });          
      }
    };
    Sidebar.prototype.close=function(){
        this.state='closed';
        this.el.className='sidebar-move-left';
        this.closeBarEl.className='close-move-right';
        console.log("关闭sidebar");
    };
    Sidebar.prototype.open=function(){
        this.state='opened';
        this.el.style.left='-120px';
        this.el.className='sidebar-move-right';
        this.closeBarEl.style.left='160px';
        this.closeBarEl.className='close-move-left';
        console.log("打开sidebar");
    };
    Sidebar.prototype.triggerSwitch=function(){
        if(this.state==='opened'){          
            this.close();
        }else{        
            this.open();
        }
    }

    var sidebar=new Sidebar();

})();