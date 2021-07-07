var tree = []; // Store branches 
var leaves = [];
var count = 0;
var angle = 0;
var canvasSide = 700;
function setup() 
{
    createCanvas(canvasSide,canvasSide);
    var a = createVector(width/2,height);
    var b = createVector(width/2,height-200);
    var root = new Branch(a, b);
    tree[0] = root;
}

function mousePressed()
{
    for (var i = tree.length - 1; i >= 0; i--)
    {
        if(!tree[i].finished)
        {
            tree.push(tree[i].branchA());
            tree.push(tree[i].branchB());
        }
        tree[i].finished = true;
    }
    count++;
    if (count === 10)
    {
        for ( var i = 0; i < tree.length; i++)
        {
            if(!tree[i].finished)
            {
                var leaf = tree[i].end.copy();
                leaves.push(leaf);
            }
        }
    }
}

function draw() 
{  
    background(30);
    for (var i =0; i< tree.length; i++)
    {
        tree[i].show();
        tree[i].jitter();
    }
    for (var i =0; i< leaves.length; i++)
    {
        fill(255, 0, 100, 100);
        noStroke();
        ellipse (leaves[i].x, leaves[i].y, 8, 8);
        leaves[i].y += random(0, 1);
    }
}
