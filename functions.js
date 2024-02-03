var colors = {
    // 0: "Color",
    0: "Black",
    1: "Brown",
    2: "Red",
    3:"Orange",
    4: "Yellow",
    5: "Green",
    6: "Blue",
    7: "Violet",
    8: "Grey",
    9: "White",
    10: "Gold",
    11: "Silver"
};
options = [];
tolerance = {
    "Brown": 1,
    "Red": 2,
    "Green": 0.5,
    "Blue": 0.25,
    "Violet": 0.1,
    "Grey": 0.05,
    "White": 20,
    "Gold": 5,
    "Silver": 10,
};
root = document.querySelector(':root');
// options = ["<option value='0'>Black</option>", "<option value='1'>Brown</option>", "<option value='2'>Red</option>", "<option value='3'>Orange</option>", "<option value='4'>Yellow</option>", "<option value='5'>Green</option>", "<option value='6'>Blue</option>", "<option value='7'>Violet</option>", "<option value='8'>Grey</option>", "<option value='9'>White</option>"];
// document.getElementById("band1_color_selections").innerHTML = options;
function reset()    {
    window.location.reload();
}
function calculate(band) {
  
    switch (band)   {
        case 1:
            root.style.setProperty('--band1_color', colors[document.getElementById('band1_color_selections').value]);
            document.getElementById('resistance_band1') . innerHTML = document.getElementById('band1_color_selections').value;
            break;
        case 2:
            root.style.setProperty('--band2_color', colors[document.getElementById('band2_color_selections').value]);
            document.getElementById('resistance_band2') . innerHTML = document.getElementById('band2_color_selections').value;
            break;
        case 3:
            root.style.setProperty('--band3_color', colors[document.getElementById('band3_color_selections').value]);
            document.getElementById('resistance_band3') . innerHTML = "0".repeat(document.getElementById('band3_color_selections').value) + " ";
            break;
        case 4:
            if (tolerance[colors[document.getElementById('tolerance_color_selections').value]] == null)  {
                alert("Invalid tolerance");
            }   else{
            root.style.setProperty('--tolerance_color', colors[document.getElementById('tolerance_color_selections').value]);
            document.getElementById('resistance_tolerance') . innerHTML = tolerance[colors[document.getElementById('tolerance_color_selections').value]];
            }
            break;
        }

}
function load_colors()  {
    console.log("load");
    document.getElementById("band1_color_selections").innerHTML = options;
    for (i = 0; i < 13; i++)    {
        if (i -1 != -1){
        options.push("<option value='"+(i-1)+"'>"+ (i-1) + " - " + colors[i-1]+"</option>");
        } else  {
            options.push("<option value='"+(i-1)+"'>"+colors[i-1]+"</option>");
        }
    }
    // for (i = 0)
    document.getElementById("band1_color_selections").innerHTML = options;
    document.getElementById("band2_color_selections").innerHTML = options;
    document.getElementById("band3_color_selections").innerHTML = options;    
    document.getElementById("tolerance_color_selections").innerHTML = options;
    // console.log(options);
    // document.getElementById("band1_color_selectors").innerText = options;



}