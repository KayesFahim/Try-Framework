import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import './components/Home.css';
import Signin from './pages/Signin.jsx';
import Signup from './pages/Signup.jsx';
import Carousel from 'react-bootstrap/Carousel'
import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';

//Pages






function App() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  return ( 
    <div className="App">    
      <div className="Container">
        <header className="Topnav">
              <p>FOO BD</p>
             <Router> 
              <Link to="/signin">Signin</Link>   
              <Link to="/signup">Signup</Link>
              <Link to="./">Home</Link>


              <Switch>
                   <Route path="/signin">
                          <Signin />
                  </Route>
                 <Route path="/signup">
                          <Signup />
                  </Route>
              </Switch> 
              </Router>      
        </header>
       

      <Carousel>
      <Carousel.Item>
             <img
                 className="d-block w-100"
                   src={require('./assets/1.jpg')}
                   alt="First slide"
            />
     <Carousel.Caption>
              
     </Carousel.Caption>
     </Carousel.Item>
     <Carousel.Item>
             <img
                className="d-block w-100"
                src={require('./assets/2.jpg')}
                alt="Third slide"
    />

    <Carousel.Caption>
     </Carousel.Caption>
     </Carousel.Item>
      <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('./assets/3.jpg')}
      alt="Third slide"
    />

    <Carousel.Caption>
      <p></p>
       </Carousel.Caption>
      </Carousel.Item>
      </Carousel>

      <div className="Features-text">
        <h1>Features Items </h1>
        <h5>You Like Most</h5>
      </div>
      



      <table style={{width: '100%'}}>
        <tbody className="Features"><tr>
            <td><div className="container page-wrapper">
        <div className="page-inner">
          <div className="row">
            <div className="el-wrapper">
              <div className="box-up">
                <img className="img" src="http://code.slicecrowd.com/labs/4/images/t-shirt.png" alt="" />
                <div className="img-info">
                  <div className="info-inner">
                    <span className="p-name">I feel like Pablo</span>
                    <span className="p-company">Yeezy</span>
                  </div>
                  <div className="a-size">Available sizes : <span className="size">S , M , L , XL</span></div>
                </div>
              </div>
              <div className="box-down">
                <div className="h-bg">
                  <div className="h-bg-inner" />
                </div>
                <Link className="cart" to="/cart">
                  <span className="price">$120</span>
                  <span className="add-to-cart">
                    <span className="txt">Add in cart</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
</td>
            <td><div className="container page-wrapper">
        <div className="page-inner">
          <div className="row">
            <div className="el-wrapper">
              <div className="box-up">
                <img className="img" src="http://code.slicecrowd.com/labs/4/images/t-shirt.png" alt="" />
                <div className="img-info">
                  <div className="info-inner">
                    <span className="p-name">I feel like Pablo</span>
                    <span className="p-company">Yeezy</span>
                  </div>
                  <div className="a-size">Available sizes : <span className="size">S , M , L , XL</span></div>
                </div>
              </div>
              <div className="box-down">
                <div className="h-bg">
                  <div className="h-bg-inner" />
                </div>
                <Link className="cart" to="/cart">
                  <span className="price">$120</span>
                  <span className="add-to-cart">
                    <span className="txt">Add in cart</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
</td>
            <td><div className="container page-wrapper">
        <div className="page-inner">
          <div className="row">
            <div className="el-wrapper">
              <div className="box-up">
                <img className="img" src="http://code.slicecrowd.com/labs/4/images/t-shirt.png" alt="" />
                <div className="img-info">
                  <div className="info-inner">
                    <span className="p-name">I feel like Pablo</span>
                    <span className="p-company">Yeezy</span>
                  </div>
                  <div className="a-size">Available sizes : <span className="size">S , M , L , XL</span></div>
                </div>
              </div>
              <div className="box-down">
                <div className="h-bg">
                  <div className="h-bg-inner" />
                </div>
                <Link className="cart" to="/cart">
                  <span className="price">$120</span>
                  <span className="add-to-cart">
                    <span className="txt">Add in cart</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
</td>
            <td><div className="container page-wrapper">
        <div className="page-inner">
          <div className="row">
            <div className="el-wrapper">
              <div className="box-up">
                <img className="img" src="http://code.slicecrowd.com/labs/4/images/t-shirt.png" alt="" />
                <div className="img-info">
                  <div className="info-inner">
                    <span className="p-name">I feel like Pablo</span>
                    <span className="p-company">Yeezy</span>
                  </div>
                  <div className="a-size">Available sizes : <span className="size">S , M , L , XL</span></div>
                </div>
              </div>
              <div className="box-down">
                <div className="h-bg">
                  <div className="h-bg-inner" />
                </div>
                <Link className="cart" to="/cart">
                  <span className="price">$120</span>
                  <span className="add-to-cart">
                    <span className="txt">Add in cart</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
</td>
          </tr>
          <tr>
            <td><div className="container page-wrapper">
        <div className="page-inner">
          <div className="row">
            <div className="el-wrapper">
              <div className="box-up">
                <img className="img" src="http://code.slicecrowd.com/labs/4/images/t-shirt.png" alt="" />
                <div className="img-info">
                  <div className="info-inner">
                    <span className="p-name">I feel like Pablo</span>
                    <span className="p-company">Yeezy</span>
                  </div>
                  <div className="a-size">Available sizes : <span className="size">S , M , L , XL</span></div>
                </div>
              </div>
              <div className="box-down">
                <div className="h-bg">
                  <div className="h-bg-inner" />
                </div>
                <Link className="cart" to="/cart">
                  <span className="price">$120</span>
                  <span className="add-to-cart">
                    <span className="txt">Add in cart</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
</td>
            <td><div className="container page-wrapper">
        <div className="page-inner">
          <div className="row">
            <div className="el-wrapper">
              <div className="box-up">
                <img className="img" src="http://code.slicecrowd.com/labs/4/images/t-shirt.png" alt="" />
                <div className="img-info">
                  <div className="info-inner">
                    <span className="p-name">I feel like Pablo</span>
                    <span className="p-company">Yeezy</span>
                  </div>
                  <div className="a-size">Available sizes : <span className="size">S , M , L , XL</span></div>
                </div>
              </div>
              <div className="box-down">
                <div className="h-bg">
                  <div className="h-bg-inner" />
                </div>
                <Link className="cart" to="/cart">
                  <span className="price">$120</span>
                  <span className="add-to-cart">
                    <span className="txt">Add in cart</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
</td>
            <td><div className="container page-wrapper">
        <div className="page-inner">
          <div className="row">
            <div className="el-wrapper">
              <div className="box-up">
                <img className="img" src="http://code.slicecrowd.com/labs/4/images/t-shirt.png" alt="" />
                <div className="img-info">
                  <div className="info-inner">
                    <span className="p-name">I feel like Pablo</span>
                    <span className="p-company">Yeezy</span>
                  </div>
                  <div className="a-size">Available sizes : <span className="size">S , M , L , XL</span></div>
                </div>
              </div>
              <div className="box-down">
                <div className="h-bg">
                  <div className="h-bg-inner" />
                </div>
                <Link className="cart" to="/cart">
                  <span className="price">$120</span>
                  <span className="add-to-cart">
                    <span className="txt">Add in cart</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
</td>
            <td><div className="container page-wrapper">
        <div className="page-inner">
          <div className="row">
            <div className="el-wrapper">
              <div className="box-up">
                <img className="img" src="http://code.slicecrowd.com/labs/4/images/t-shirt.png" alt="" />
                <div className="img-info">
                  <div className="info-inner">
                    <span className="p-name">I feel like Pablo</span>
                    <span className="p-company">Yeezy</span>
                  </div>
                  <div className="a-size">Available sizes : <span className="size">S , M , L , XL</span></div>
                </div>
              </div>
              <div className="box-down">
                <div className="h-bg">
                  <div className="h-bg-inner" />
                </div>
                <Link className="cart" to="/cart">
                  <span className="price">$120</span>
                  <span className="add-to-cart">
                    <span className="txt">Add in cart</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
</td>
          </tr>
        </tbody>
        </table>

        <div className="banner">
        <img className="img" src={require('./assets/banner.jpg')} alt="Banner" height='150px' width="1080px" />
        </div>

        <div className="Features-text">
        <h1>new Arrival</h1>
        <h5>New Things Make Changes</h5>
         </div>


         <div className="Arrival">

    

    <div style={{ padding: '5px' }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={4}
        gutter={20}
        leftChevron={<button>{'<'}</button>}
        rightChevron={<button>{'>'}</button>}
        outsideChevron
        chevronWidth={5}
      >
        <div style={{ height: 400, width: 300}}><div className="container page-wrapper">
        <div className="page-inner">
          <div className="row">
            <div className="el-wrapper">
              <div className="box-up">
                <img className="img" src="http://code.slicecrowd.com/labs/4/images/t-shirt.png" alt="" />
                <div className="img-info">
                  <div className="info-inner">
                    <span className="p-name">I feel like Pablo</span>
                    <span className="p-company">Yeezy</span>
                  </div>
                  <div className="a-size">Available sizes : <span className="size">S , M , L , XL</span></div>
                </div>
              </div>
              <div className="box-down">
                <div className="h-bg">
                  <div className="h-bg-inner" />
                </div>
                <Link className="cart" to="/cart">
                  <span className="price">$120</span>
                  <span className="add-to-cart">
                    <span className="txt">Add in cart</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div></div>
        <div style={{ height: 400, width: 300}}><div className="container page-wrapper">
        <div className="page-inner">
          <div className="row">
            <div className="el-wrapper">
              <div className="box-up">
                <img className="img" src="http://code.slicecrowd.com/labs/4/images/t-shirt.png" alt="" />
                <div className="img-info">
                  <div className="info-inner">
                    <span className="p-name">I feel like Pablo</span>
                    <span className="p-company">Yeezy</span>
                  </div>
                  <div className="a-size">Available sizes : <span className="size">S , M , L , XL</span></div>
                </div>
              </div>
              <div className="box-down">
                <div className="h-bg">
                  <div className="h-bg-inner" />
                </div>
                <Link className="cart" to="/cart">
                  <span className="price">$120</span>
                  <span className="add-to-cart">
                    <span className="txt">Add in cart</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div></div>
        <div style={{ height: 400, width: 300}}><div className="container page-wrapper">
        <div className="page-inner">
          <div className="row">
            <div className="el-wrapper">
              <div className="box-up">
                <img className="img" src="http://code.slicecrowd.com/labs/4/images/t-shirt.png" alt="" />
                <div className="img-info">
                  <div className="info-inner">
                    <span className="p-name">I feel like Pablo</span>
                    <span className="p-company">Yeezy</span>
                  </div>
                  <div className="a-size">Available sizes : <span className="size">S , M , L , XL</span></div>
                </div>
              </div>
              <div className="box-down">
                <div className="h-bg">
                  <div className="h-bg-inner" />
                </div>
                <Link className="cart" to="/cart">
                  <span className="price">$120</span>
                  <span className="add-to-cart">
                    <span className="txt">Add in cart</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div></div>
        <div style={{ height: 400, width: 300}}><div className="container page-wrapper">
        <div className="page-inner">
          <div className="row">
            <div className="el-wrapper">
              <div className="box-up">
                <img className="img" src="http://code.slicecrowd.com/labs/4/images/t-shirt.png" alt="" />
                <div className="img-info">
                  <div className="info-inner">
                    <span className="p-name">I feel like Pablo</span>
                    <span className="p-company">Yeezy</span>
                  </div>
                  <div className="a-size">Available sizes : <span className="size">S , M , L , XL</span></div>
                </div>
              </div>
              <div className="box-down">
                <div className="h-bg">
                  <div className="h-bg-inner" />
                </div>
                <Link className="cart" to="/cart">
                  <span className="price">$120</span>
                  <span className="add-to-cart">
                    <span className="txt">Add in cart</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div></div>
        <div style={{ height: 400, width: 300}}><div className="container page-wrapper">
        <div className="page-inner">
          <div className="row">
            <div className="el-wrapper">
              <div className="box-up">
                <img className="img" src="http://code.slicecrowd.com/labs/4/images/t-shirt.png" alt="" />
                <div className="img-info">
                  <div className="info-inner">
                    <span className="p-name">I feel like Pablo</span>
                    <span className="p-company">Yeezy</span>
                  </div>
                  <div className="a-size">Available sizes : <span className="size">S , M , L , XL</span></div>
                </div>
              </div>
              <div className="box-down">
                <div className="h-bg">
                  <div className="h-bg-inner" />
                </div>
                <Link className="cart" to="/cart">
                  <span className="price">$120</span>
                  <span className="add-to-cart">
                    <span className="txt">Add in cart</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div></div>
        <div style={{ height: 400, width: 300}}><div className="container page-wrapper">
        <div className="page-inner">
          <div className="row">
            <div className="el-wrapper">
              <div className="box-up">
                <img className="img" src="http://code.slicecrowd.com/labs/4/images/t-shirt.png" alt="" />
                <div className="img-info">
                  <div className="info-inner">
                    <span className="p-name">I feel like Pablo</span>
                    <span className="p-company">Yeezy</span>
                  </div>
                  <div className="a-size">Available sizes : <span className="size">S , M , L , XL</span></div>
                </div>
              </div>
              <div className="box-down">
                <div className="h-bg">
                  <div className="h-bg-inner" />
                </div>
                <Link className="cart" to="/cart">
                  <span className="price">$120</span>
                  <span className="add-to-cart">
                    <span className="txt">Add in cart</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div></div>
        <div style={{ height: 400, width: 300}}><div className="container page-wrapper">
        <div className="page-inner">
          <div className="row">
            <div className="el-wrapper">
              <div className="box-up">
                <img className="img" src="http://code.slicecrowd.com/labs/4/images/t-shirt.png" alt="" />
                <div className="img-info">
                  <div className="info-inner">
                    <span className="p-name">I feel like Pablo</span>
                    <span className="p-company">Yeezy</span>
                  </div>
                  <div className="a-size">Available sizes : <span className="size">S , M , L , XL</span></div>
                </div>
              </div>
              <div className="box-down">
                <div className="h-bg">
                  <div className="h-bg-inner" />
                </div>
                <Link className="cart" to="/cart">
                  <span className="price">$120</span>
                  <span className="add-to-cart">
                    <span className="txt">Add in cart</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div></div>
        <div style={{ height: 400, width: 290}}><div className="container page-wrapper">
        <div className="page-inner">
          <div className="row">
            <div className="el-wrapper">
              <div className="box-up">
                <img className="img" src="http://code.slicecrowd.com/labs/4/images/t-shirt.png" alt="" />
                <div className="img-info">
                  <div className="info-inner">
                    <span className="p-name">I feel like Pablo</span>
                    <span className="p-company">Yeezy</span>
                  </div>
                  <div className="a-size">Available sizes : <span className="size">S , M , L , XL</span></div>
                </div>
              </div>
              <div className="box-down">
                <div className="h-bg">
                  <div className="h-bg-inner" />
                </div>
                <Link className="cart" to="/cart">
                  <span className="price">$120</span>
                  <span className="add-to-cart">
                    <span className="txt">Add in cart</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div></div>
      </ItemsCarousel>
    </div>
    </div>






 </div>




      <footer className="Footer">
        <div className="Container">
              <h5>@ Copyright FOO BD</h5>
              </div>
        </footer>
  </div>

  );
}

export default App;
