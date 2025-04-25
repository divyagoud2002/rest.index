

const Resturant=()=>{
    const menuItems = [
        {
          name: "Pasta Primavera",
          description: "A delightful mix of fresh vegetables and pasta in a light sauce.",
          image: "https://source.unsplash.com/featured/?pasta"
        },
        {
          name: "Grilled Salmon",
          description: "Fresh Atlantic salmon grilled to perfection.",
          image: "https://source.unsplash.com/featured/?salmon"
        },
        {
          name: "Veggie Burger",
          description: "A healthy and delicious plant-based burger.",
          image: "https://source.unsplash.com/featured/?veggieburger"
        },
        {
          name: "Steak Frites",
          description: "Juicy steak served with crispy golden fries.",
          image: "https://source.unsplash.com/featured/?steak"
        },
        {
          name: "Caesar Salad",
          description: "Classic Caesar with crunchy croutons and creamy dressing.",
          image: "https://source.unsplash.com/featured/?caesarsalad"
        },
        {
          name: "Chocolate Lava Cake",
          description: "Rich chocolate cake with a gooey center.",
          image: "https://source.unsplash.com/featured/?chocolatecake"
        }
      ];
    
      return (
        <div  style={{width:"4000px"}}className="min-h-screen bg-gray-100 p-4 h-80">
          {/* Header */}
          <header  className="bg-white shadow p-6 rounded-2xl mb-6 h-44">
            <img  style={{width:"200px",marginLeft:"270px" ,marginTop:"-50px" }} src="assest/mrest.png" alt="" />
            <h1  style={{marginLeft:"450px" ,marginTop:"-90px"}}   className="text-6xl font-bold  text-green-500">SBMadhu Resturant</h1>
            
          </header>
          <br />
    
          {/* Hero Section */}
          <section  style={{width:"1700px" }} className="bg-white ml-72">
          <section style={{marginRight:"700px",width:"900px"}} className="bg-white p-6 rounded-2xl shadow mb-6 flex flex-col md:flex-row items-center   max-w-6xl mr-52 ">
            <img   style={{width:"3000px",height:"900px" ,marginLeft:"80px"}} src="assest/photo3food.png" alt="Restaurant" className="w-full md:w-1/2 rounded-2xl mb-4 md:mb-0 md:mr-6 ml-96"  />
            <div>
            <p style={{marginTop:"-200px", width:"400px"}} className="bg-green-500 text-4xl text-white w-64"> 50% off on all Products</p><br /><br /><br /><br />
              <h2 style={{width:"600px"}} className="font-semibold text-gray-800 mb-2  text-8xl">Taste the joy in every bite!</h2><br />
              <p className="text-gray-600 text-xl">We serve a variety of delicious dishes made 
                with fresh ingredients&lots of love. Come and enjoy a meal you won't forget!</p>
              <br /><br />
              <h1 style={{marginTop:"100px",marginLeft:"100px" ,width:"200px"}} className="bg-yellow-400 text-4xl text-gray-800  center  w-28">Explore now</h1>
            </div>
          </section>
          </section>


          <section className="bg-white">
          <section>
            <div  style={{marginLeft:"100px"}}>
              <img  style={{width:"120px" , height:"85px" ,marginBottom:"-400px",marginLeft:"700px" ,marginTop:"10px"}} className=""  src="assest/coponphoto.png" alt="" />
              <h1   style={{width:"500px",height:"20px" ,marginLeft:'830px' , marginTop:"350px"}} className="text-3xl text-gray-800 w-52">Discount Voucher</h1><br />
              <p   style={{width:"500px",height:"20px" ,marginLeft:'830px' , marginTop:"10px"}}>ipsum dolor sit, amet consectetur adipisicing elit.</p>
             
            </div>
          </section>
          <section>
            <div style={{marginLeft:"300px"}}>
              <img style={{width:"100px",height:"80px",marginLeft:"1070px" , marginTop:"-70px"}}  src="assest/vegetable.png" alt="" />
              <h1 style={{width:"200px",height:"20px",marginLeft:"1200px",marginTop:"-100px"}} className="text-black text-2xl" >Fresh healthy food</h1>
              <p style={{width:"200px",height:"20px",marginLeft:"1200px",marginTop:"20px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, a!</p>
            </div>
          </section>
          <section>
            <div style={{marginLeft:"600px"}}>
              <img  style={{width:"70px",height:"80px",marginLeft:"1300px" ,marginTop:"-40px"}}  src="assest/homephoto.png" alt="" />
              <h1  style={{width:"300px",height:"100px",marginLeft:"1400px" ,marginTop:"-70px"}} className="text-black  text-2xl">Fast Home delivery</h1>
              <p   style={{width:"300px",height:"100px",marginLeft:"1400px" ,marginTop:"-60px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, veritatis?</p>
            </div>
          </section>
        </section>
    
          {/* Menu Section */}
          <section style={{width:"1100px"}} className=" p-6 rounded-2xl shadow max-h-full mb-6">
            <h1  style={{marginLeft:"1300px" ,width:"500px" ,marginTop:"70px"}}className="  font-semibold text-white  mb-4 text-6xl center bg-green-500 ">Explore our Menu</h1>
            <br /><br />
            <br />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            
                <div style={{width:"800px",height:"150px"}}  className="bg-gray-50 p-4 rounded-xl shadow hover:shadow-lg transition w-96 h-96 ">
                  <img src=" assest/foodphoto6.png"    style={{width:"1500px",height:"700px" ,marginTop:"-50px"}} alt="" className=" rounded-xl mb-3" />
                
                </div>
            </div>
            <div>
            <div>
              <section>
              <div >
            <img style={{width:"900px" ,marginLeft:"900px" ,marginTop:"-150px" ,height:"600px"}} src="assest/food6photo.png" alt="" /> <br></br>
            </div>
            </section>
            <img style={{width:"800px" , height:"700px",marginTop:"200px"}} src="assest/foodphoto2.png" alt="" />
            <img  style={{width:"800px" , height:"700px",marginLeft:"900px",marginTop:"-700px" , }} src="assest/mainphotofood.png" alt="" />
            <img      style={{width:"900px" , height:"700px",marginLeft:"1800px",marginTop:"-700px" , }} src="assest/photo4food.png" alt="" />
            <img     style={{width:"900px" , height:"600px",marginLeft:"1900px",marginTop:"-1500px" , }} src="assest/headerphoto.png" alt="" />
            <img  style={{width:"900px" , height:"600px",marginLeft:"2900px",marginTop:"-600px" , }}  src="assest/foodphoto5.png" alt="" />
            <img   style={{width:"900px" , height:"700px",marginLeft:"2800px",marginTop:"180px" , }}    src="assest/icreamphoto.png" alt="" />
            </div>
            </div>
          </section>
    
          {/* Footer */}
          <footer className="text-center text-gray-500 text-sm mt-6">
            <section className="bg-white border-8 border-orange-100" style={{width:"4000px",height:"700px" , marginTop:"-100px"}}>
              <div>
              <img  style={{width:"200px", marginTop:"300px",marginLeft:"500px" }} className="mt-72" src="assest/mrest.png" alt="" />
                <h1 className="text-7xl text-green-600" style={{marginLeft:"670px",width:"660px", marginTop:"-120px"}}>SBMadhu Resturant</h1>
              </div>
              <div style={{marginLeft:"1500px", marginTop:"-150px"}} >
                <ul>
                <h1   className="text-gray-800 text-5xl gap-3" style={{width:"300px"}}>Main Links</h1><br /><br />
                <p className="text-gray-600 text-5xl gap-64"  style={{width:"400px" , marginLeft:"-10px", whiteSpace:"break-spaces"}}>order Tracking</p><br />
                <p className="text-gray-600 text-5xl gap-44"  style={{width:"310px" , marginleft:"-30px"}}>New Order</p><br />
                <p className="text-gray-600 text-5xl"  style={{width:"310px"}}>Contact Us</p><br />
                <p className="text-gray-600 text-5xl"  style={{width:"400px"}}>Newa & Blogs</p>
                </ul>
                
              </div>
              <div>
                <h1 className="text-gray-700  text-5xl" style={{marginTop:"-350px" , marginRight:"-650px"}}>Support</h1><br />
                <h1 className="text-gray-700  text-5xl" style={{marginTop:"40px" , marginRight:"-610px" , }}>About Us</h1><br />
                <h1 className="text-gray-700  text-5xl" style={{marginTop:"20px" , marginRight:"-690px" , }}>Privacy policy</h1><br />
                <h1 className="text-gray-700  text-5xl" style={{marginTop:"10px" , marginRight:"-780px"}}>Term & Conditions</h1><br />

                
              </div>
              <div style={{marginRight:"-2000px" }}>
               <h1  className="text-5xl text-gray-700" style={{marginTop:"-350px"}}>Support</h1><br /><br /><br />
               <input style={{marginTop:"-330px", width:"250px" ,height:"20px"}} className="border-8 text-2xl p-5 bg-white"  type="text"  placeholder="enter your Email"/> <br /><br /><br /><br />
               <h1 style={{marginRight:"-50px"}} className="text-6xl text-gray-600">Follow Us</h1> <img style={{width:"600px", marginleft:"500px", margintop:"900px"}} src="assest/photosocial.png" alt="" />
               <br />
              
              </div>
{/*             
            &copy; 2025 Delicious Bites. All rights reserved. */}
            </section>
          </footer>
        </div>
      );
    };
export default Resturant