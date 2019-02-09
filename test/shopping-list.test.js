chai.should()
const expect = chai.expect;
const assert = chai.assert;

//Shopping List ITEM CLASS

describe('Shopping List Item', function() {

    var rice = new ShoppingListItem('rice', 'organic brown short grain');
    
    
    it('should be a function', function (){
      expect(ShoppingListItem).to.be.a('function');
    });

    it('should have property of name', function() {
        expect(rice).to.have.property('name');
    });

    it('should have property of description',function() {
        expect(rice).to.have.property('description');
    });

    it('should have property isDone', function() {
        expect(rice).to.have.property('isDone');

    });



describe('check method', function(){

    it('should be a function', function(){
        expect(rice.check).to.be.a('function');
    });

    it('should set isDone property to true', function(){
        rice.check();
        expect(rice.isDone).to.be.true;
    })

})

describe('uncheck method', function(){

    it('should be a function', function(){
        expect(rice.uncheck).to.be.a('function');
    });

    it('should set isDone property to false', function(){
        rice.uncheck();
        expect(rice.isDone).to.be.false;
    })
})

describe('render method', function(){

    it('should be a function', function(){
        expect(rice.render).to.be.a('function');
    });

    it('should return html string', function(){
        expect(rice.render()).to.equal(`<li class="completed_${rice.isDone}"><span>${rice.name}</span> <span>${rice.description}</span></li>`)
    })
})



}); //end



    

