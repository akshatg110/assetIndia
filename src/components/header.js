import reactDom from 'react-dom';
import logo from '../asset_logo.png';
function Header(){
   return( 
   <div style={{display:'flex',flexDirection:'row',backgroundColor:'#D5EDB3'}}>
        <img style={{height:'200px'}} src={logo} alt=""/>
        <div style={{display:'flex',flexDirection:'column',textAlign:'right',flex:1,height:'200px'}}>
        <div style={{textAlign:'right',padding:'5px'}}>
            Memebers | Memebership Details | <a href="#">Membership Forum</a>
        </div>
        <div style={{color:'brown',padding:'5px'}}>
        All India Regisistered Under Society Registration Act1860 (Reg. No:485/2016-17 )
        </div>
        <div style={{textAlign:'right',padding:'20px',fontSize:'40px',color:'#5C743D'}}>
        Academic Society of Science Engineering & Technology
        </div>
        <div style={{textAlign:'right',flex:1}}>
        Be the change for good...
        </div>
        </div>
   </div>
   )

}
export default Header;