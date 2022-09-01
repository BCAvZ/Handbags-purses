import React from 'react';
import './App.css';

import Button from "./components/Button" ;
import Producten from "./components/Producten"
import Tiles from "./components/Tiles"

import bag_1 from './assets/bag_1.png';
import bag_2 from './assets/bag_2.png';
import bag_3 from './assets/bag_3.png';
import bag_4 from './assets/bag_4.png';
import brand from './assets/brand.png';
import our_story from './assets/our_story.png';


function App() {

  return (
      <>
          <h1>Handbags & Purses</h1>
          <nav>
                <Button
                    text="to the collection"
                />

                <Button
                    text="shop all bags"
                />

                <Button
                  text="pre-orders"
                  disable={true}
                />
          </nav>
          <main>
              <Producten
                label='Best seller'
                picture={bag_1}
                name='The handy bag'
                price='€400,-'
              />
              <Producten
                  label='Best seller'
                  picture={bag_2}
                  name='The stylish bag'
                  price='€250,-'
              />
              <Producten
                  label='New collection'
                  picture={bag_3}
                  name='The simple bag'
                  price='€300,-'
              />
              <Producten
                  label='New collection'
                  picture={bag_4}
                  name='The trendy bag'
                  price='€150,-'
              />
          </main>
          <footer>
              <section>
                  <Tiles
                    title="THE BRAND"
                    content='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus eos labore quam.
                  Architecto asperiores aut corporis deleniti eveniet in iusto, modi, nam natus, odit reiciendis
                  totam vero voluptate voluptates voluptatibus?'
                  />

              </section>
              <section>
                  <Tiles
                      tilesPic={brand}
                  />
              </section>
              <section>
                  <Tiles
                      tilesPic={our_story}
                  />
              </section>
              <section>
                  <Tiles
                      title="OUR STORY"
                      content='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus eos labore quam.
                  Architecto asperiores aut corporis deleniti eveniet in iusto, modi, nam natus, odit reiciendis
                  totam vero voluptate voluptates voluptatibus?'
                  />
              </section>



          </footer>




      </>
  );
}

export default App;



