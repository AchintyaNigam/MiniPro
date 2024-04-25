import React from "react";
import './learn.css'
import shapes_image from "../assets/shapes_image.png"
import rect_image from "../assets/rect_image.png"
import circle_image from "../assets/circle_image.png"
import octa_image from "../assets/octa_image.png"
import pent_image from "../assets/pent_image.png"
import square_image from "../assets/square_image.png"
import tria_image from "../assets/tria_image.png"



export default function Learn(){
	return(	
		<>
		<div id="nav">
			<a href="/" target="_top">
			<div id = "sign_up" class = "nav_sections">
				Logout
			</div>
			</a>
			<a href="/reg" target = "_top">
			<div id = "register" class="nav_sections">
				Register
			</div>
			</a>
			<a href="/threed" target = "_top">
            <div id = "threed" class="nav_sections">
                3D Shapes!
            </div>
        	</a>
			<a href="/assessment" target = "_top">
            <div id = "assessment" class="nav_sections">
                Assessment
            </div>
        	</a>
			<a href="/feedback" target = "_top">
            <div id = "feedback" class="nav_sections">
                Feedback
            </div>
        	</a>
		</div>
		<a href="#main_content">
		<div id="header">Geometric Shapes Their Area and Applications</div>
		</a>

		<div id="main_content">
		<h1>Welcome to the World of Geometric Shapes!</h1>
		<p>Greetings and welcome to our exploration of the captivating realm of geometric shapes. Whether you're a seasoned mathematician, an artist seeking inspiration, or simply intrigued by the elegance of shapes, you've arrived at a place where polygons, circles, and everything in between come to life.

Prepare to embark on a journey through the intricacies and applications of these fundamental forms. From the simplicity of squares and rectangles to the enchanting symmetry of circles, triangles, pentagons, and hexagons, each shape holds its unique charm and purpose.

Our aim is to unravel the mysteries of these shapes, delve into their mathematical properties, unveil their formulas for area calculation, and showcase their diverse applications across various disciplines. Whether it's the symmetrical allure of a square, the mathematical precision of a circle, or the structural strength of a triangle, we're here to guide you through it all.

Join us as we uncover the beauty, versatility, and significance of geometric shapes. Explore their artistic representations, unravel their scientific implications, and witness their practical applications in everyday life. From architecture to art, from engineering to nature's own design, these shapes form the very foundation of our world.

So, dive in, explore, and discover the wonders that geometric shapes hold. Let's journey together into this captivating world where mathematics meets creativity, where form meets function, and where beauty is found in the simplicity of shapes.

Welcome aboard!</p>
		<hr />
		<div class="images">
			<img src={shapes_image} alt="Shapes image" usemap="#shapesmap" />
			<map name="shapesmap">
				<area shape="rect" coords="171,48,353,136" alt="Rectangle" href="#rect" />
				<area shape="rect" coords="64,294,216,483" alt="Square" href="#square" />
				<area shape="circle" coords="394,206,40" alt="Circle" href="#circle" />
				<area shape="poly" coords="256,153,324,271,180,276" alt="Triangle" href="#tri" />
				<area shape="poly" coords="130,121,205,179,167,263,71,264,50,178" alt="Pentagon" href="#pent" />
				<area shape="poly" coords="339,298,399,209,438,343,437,399,396,444,333,441,293,398,294,338" alt="Octagon" href="#oct" />
			</map>
		</div>
			<div id="rect" class="sections">
				<hr />
				<h3>Rectangle</h3>
				<p>The rectangle is a four-sided polygon with opposite sides of equal length and four right angles. Its area is calculated by multiplying the length by the width. Rectangles find wide usage in architecture, engineering, and design due to their regularity and ease of measurement. They are prevalent in buildings, windows, doors, and various construction projects.</p>
				<img src={rect_image} width="300" height="400" />
			</div>
			<div id ="square" class="sections">
				<hr />
				<h3>Square</h3>
				<p>A square is a special type of rectangle with all four sides of equal length and four right angles. Its area is calculated by squaring the length of one side. Squares are fundamental in geometry and are extensively applied in fields like mathematics, art, and construction. Their equal sides and angles make them ideal for tiles, flooring, and geometric patterns.</p>
				<img src={square_image} width="400" height="400" />
			</div>

			<div id="circle" class="sections">
				<hr />
				<h3>Circle</h3>
				<p>The circle is a perfectly round shape with a constant radius from the center to any point on its circumference. Its area is calculated using the formula πr<sup>2</sup>, where 'r' represents the radius. Circles have vital applications in mathematics, physics, and engineering, appearing in areas such as wheels, gears, orbits, and structural design.</p>
				<img src={circle_image} />
			</div>
			<div id="tri" class="sections">
				<hr />
				<h3>Triangle</h3>
				<p>Triangles are three-sided polygons with various types based on their angles and sides. Their area is determined by various formulas such as ½ base × height for a right-angled triangle or Heron's formula for any triangle given the three side lengths. Triangles are fundamental in trigonometry, architecture, and engineering, often seen in roof designs, bridges, and trusses.</p>
				<img src={tria_image} width="400" height="400" />
			</div>
			<div id="pent" class="sections">
				<hr />
				<h3>Regular Pentagon</h3>
				<p>A regular pentagon is a five-sided polygon with equal sides and angles. Its area can be calculated using specialized formulas like (1/4) × √(5 × (5 + 2√5)) × side<sup>2</sup>. Regular pentagons are found in nature in star shapes and are used in architecture and design for creating unique patterns, such as in quilting or decorative tiles</p>
				<img src={pent_image} width="300" height="300" />
			</div>
			<div id="oct" class="sections">
				<hr />
				<h3>Regular Octagon</h3>
				<p>A regular octagon, an eight-sided polygon with equal sides and angles measuring 135 degrees each, shares similarities with the regular hexagon but boasts eight sides. With symmetrical properties and rotational symmetry of order 8, this geometric shape finds diverse applications. Its uniformity in side length allows for architectural elegance in structures like the Tower of the Winds, while its symmetrical nature lends itself to decorative tiles and mathematical patterns. Additionally, in engineering, it serves as a design element for nuts, bolts, and gears due to its symmetrical attributes. The area of a regular octagon can be calculated using the formula (2 + 2√2) × s<sup>2</sup>, where 's' represents the length of a side, or by breaking it into smaller shapes, simplifying the area calculation. This versatility makes the regular octagon a versatile and visually appealing shape across various fields</p>
				<img src={octa_image} />
			</div>
		</div>
		<div id="footer">
		    <p>Made by Achintya Nigam. 22BCE2759</p>
		</div>
	</>
)
}