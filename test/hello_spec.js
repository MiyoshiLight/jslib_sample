describe("Hello Test", function() {
    it("test", function() {
	var a = 'test';
	var e = 'test';
	expect(a).to.equal(e);
    });

    it("return hello", function() {
	expect(hello()).to.equal("hello");
    });
});
