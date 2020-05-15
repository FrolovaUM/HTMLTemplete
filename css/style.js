*{ 
font-family: Arial, Helvetica, sans-serif; 
box-sizing: border-box; 
margin: 0; 
padding: 0; 
/*border:2 pxsolid red; */ 
} 

body{ 
display: flex; 
flex-direction: column; 
align-items: center; 
min-height: 100vh; 
} 

main{ 
flex:1; 
} 

p{ 
margin-top:1em; 
} 

.container{ 
min-width: 340px; 
width: 1080px; 
max-width: 98vw; 
padding: 0 12px; 
} 

h1{ 
text-align: center; 
} 

nav{ 
text-align: center; 
} 

nav > li { 
display: inline-block; 
padding: 2px 4px; 
margin: 5px; 
}  

a{ 
text-decoration: none; 
} 

header{ 
background: silver; 
} 

footer { 
background: black; 
color: white; 
font-size: small; 
text-align: center; 
min-height: 2em; 
} 