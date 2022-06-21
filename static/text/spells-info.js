var concen = "Concentration";

// Duration
var instant = "Instantaneous";

//Range
var self = "Self";
var touch = "Touch";
var sight = "Sight";
var unlimited = "Unlimited";
var special = "Special";

function feet(range){
    return `${range} feet`;
}

function mile(range){
    if(range == 1){
        return `${range} mile`;
    }
    else{
        return `${range} miles`;
    }
}

function self_foot_radius(range, sphere){
    if(sphere == true){
        return `Self (${range}-foot radius hemisphere)`;
    }
    else{
        return `Self (${range}-foot radius)`;
    }
}

function self_foot_cone(range){
    return `Self (${range}-foot cone)`;
}

function self_foot_cube(range){
    return `Self (${range}-foot cube)`;
}

function self_foot_line(range){
    return `Self (${range}-foot line)`;
}

function self_mile_radius(range, sphere){
    if(sphere == true){
        return `Self (${range}-mile radius hemisphere)`;
    }
    else{
        return `Self (${range}-mile radius)`;
    }
}

function self_mile_cone(range){
    return `Self (${range}-mile cone)`;
}

function self_mile_cube(range){
    return `Self (${range}-mile cube)`;
}

function self_mile_line(range){
    return `Self (${range}-mile line)`;
}

module.exports = {
    concen, instant,
    self,touch,sight,unlimited,special,feet,mile,
    self_foot_cone,self_foot_cube,self_foot_line,self_foot_radius,
    self_mile_cone,self_mile_cube,self_mile_line,self_mile_radius
}
