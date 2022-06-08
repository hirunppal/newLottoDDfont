import React from "react";

function Cartscard() {
  return (
    <div>
      <div class="flex flex-row justify-between align-center sm:p-2 sm:mb-4 lg:p-6 lg:mb-6 pt-4  pb-3 rounded-lg shadow-lg bg-white max-w-3xl">
        <div class="flex flex-row align-items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              width="150"
              height="150"
              alt=""
              id="image"
            />
          </div>
          <div class="flex flex-column pl-md-3 pl-1">
            <div>
              <h6>COTTON T-SHIRT</h6>
            </div>
            <div>
              Art.No:<span class="pl-2">091091001</span>
            </div>
            <div>
              Color:<span class="pl-3">White</span>
            </div>
            <div>
              Size:<span class="pl-4"> M</span>
            </div>
          </div>
        </div>
        <div class="pl-md-0 pl-1">
          <b>$9.99</b>
        </div>
        <div class="pl-md-0 pl-2">
          <span class="fa fa-minus-square text-secondary"></span>
          <span class="px-md-3 px-1">2</span>
          <span class="fa fa-plus-square text-secondary"></span>
        </div>
        <div class="pl-md-0 pl-1">
          <b>$19.98</b>
        </div>
        <div class="close">&times;</div>
      </div>
    </div>
  );
}

export default Cartscard;
