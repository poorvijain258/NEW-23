class rope{
	constructor(body1,body2,pointA,pointB)
	{
    this.pointA=pointA
	this.pointB=pointB

	var options ={
		bodyA=body1,
		bodyB=body2,
		pointB:{x:this.pointA,y:this.pointB}
	}
	//create rope constraint here 
	this.rope = Matter.constraint.create(options);
	World.add = world,this.rope;
	}


     display()
	 {
    varpointA=this.rope.bodyA.position;
	varpointB=this.rope.bodyB.position;
     
}
   
}
