
describe('A suite', () =>  {
    it('contains spec with an expectation', () =>  {
        expect(true).toBe(true);
    });
});

describe('A suite is just a function', () =>  {
    var a;

    it('and so is a spec', () =>  {
        a = true;

        expect(a).toBe(true);
    });
});

describe('The `toBe` matcher compares with ===', () =>  {

    it('and has a positive case', () =>  {
        expect(true).toBe(true);
    });

    it('and can have a negative case', () =>  {
        expect(false).not.toBe(true);
    });

});

describe('A suite with some shared setup', () =>  {
    var foo = 0;

    beforeEach(() =>  {
        foo += 1;
    });

    afterEach(() =>  {
        foo = 0;
    });

    beforeAll(() =>  {
        foo = 1;
    });

    afterAll(() =>  {
        foo = 0;
    });

});

describe('A spec', () =>  {
    beforeEach(() =>  {
        this.foo = 0;
    });

    it('can use the `this` to share state', () =>  {
        expect(this.foo).toEqual(0);
        this.bar = 'test pollution?';
    });

    it('prevents test pollution by having an empty `this` created for the next spec', () =>  {
        expect(this.foo).toEqual(0);
        expect(this.bar).toBe(undefined);
    });
});

describe('A spec using the fail function', () =>  {
    var foo = function (x, callBack) {
        if (x) {
            callBack();
        }
    };

    it('should not call the callBack', () =>  {
        foo(false, () =>  {
            fail('Callback has been called');
        });
    });
});

describe('A spec', () =>  {
    var foo;

    beforeEach(() =>  {
        foo = 0;
        foo += 1;
    });

    afterEach(() =>  {
        foo = 0;
    });

    it('is just a function, so it can contain any code', () =>  {
        expect(foo).toEqual(1);
    });

    it('can have more than one expectation', () =>  {
        expect(foo).toEqual(1);
        expect(true).toEqual(true);
    });

    describe('nested inside a second describe', () =>  {
        var bar;

        beforeEach(() =>  {
            bar = 1;
        });

        it('can reference both scopes as needed', () =>  {
            expect(foo).toEqual(bar);
        });
    });
});

xdescribe('A spec', () =>  {
    var foo;

    beforeEach(() =>  {
        foo = 0;
        foo += 1;
    });

    it('is just a function, so it can contain any code', () =>  {
        expect(foo).toEqual(1);
    });
});

describe('Pending specs', () =>  {
    xit('can be declared xit', () =>  {
        expect(true).toBe(false);
    });

    it('can be declared with `it` but without a function');

    it('can be declared by calling `pending` in the spec body', () =>  {
        expect(true).toBe(false);
        pending('this is why it is pending');
    });
});

describe('A spy', () =>  {
    var foo, bar = null;

    beforeEach(() =>  {
        foo = {
            setBar: function (value) {
                bar = value;
            }
        };

        spyOn(foo, 'setBar');

        foo.setBar(123);
        foo.setBar(456, 'another param');
    });

    it('tracks that the spy was called', () =>  {
        expect(foo.setBar).toHaveBeenCalled();
    });

    it('tracks that the spy was called x times', () =>  {
        expect(foo.setBar).toHaveBeenCalledTimes(2);
    });

    it('tracks all the arguments of its calls', () =>  {
        expect(foo.setBar).toHaveBeenCalledWith(123);
        expect(foo.setBar).toHaveBeenCalledWith(456, 'another param');
    });

    it('stops all execution on a function', () =>  {
        expect(bar).toBeNull();
    });

    it('tracks if it was called at all', () =>  {
        foo.setBar();

        expect(foo.setBar.calls.any()).toEqual(true);
    });
});

describe('A spy, when created manually', () =>  {
    var whatAmI;

    beforeEach(() =>  {
        whatAmI = jasmine.createSpy('whatAmI');

        whatAmI('I', 'am', 'a', 'spy');
    });

    it('tracks that the spy was called', () =>  {
        expect(whatAmI).toHaveBeenCalled();
    });
});

describe('Multiple spies, when created manually', () =>  {
    var tape;

    beforeEach(() =>  {
        tape = jasmine.createSpyObj('tape', ['play', 'pause', 'stop', 'rewind']);

        tape.play();
        tape.pause();
        tape.rewind(0);
    });

    it('creates spies for each requested function', () =>  {
        expect(tape.play).toBeDefined();
        expect(tape.pause).toBeDefined();
        expect(tape.stop).toBeDefined();
        expect(tape.rewind).toBeDefined();
    });
});

describe('Matching with finesse', () =>  {

    describe('jasmine.any', () =>  {
        it('matches any value', () =>  {
            expect({}).toEqual(jasmine.any(Object));
            expect(12).toEqual(jasmine.any(Number));
        });

        describe('when used with a spy', () =>  {
            it('is useful for comparing arguments', () =>  {
                var foo = jasmine.createSpy('foo');
                foo(12, () =>  {
                    return true;
                });

                expect(foo).toHaveBeenCalledWith(jasmine.any(Number), jasmine.any(Function));
            });
        });
    });

    describe('jasmine.anything', () =>  {
        it('matches anything', () =>  {
            expect(1).toEqual(jasmine.anything());
        });

        describe('when used with a spy', () =>  {
            it('is useful when the argument can be ignored', () =>  {
                var foo = jasmine.createSpy('foo');
                foo(12, () =>  {
                    return false;
                });

                expect(foo).toHaveBeenCalledWith(12, jasmine.anything());
            });
        });
    });

    describe('jasmine.objectContaining', () =>  {
        var foo;

        beforeEach(() =>  {
            foo = {
                a: 1,
                b: 2,
                bar: 'baz'
            };
        });

        it('matches objects with the expect key/value pairs', () =>  {
            expect(foo).toEqual(jasmine.objectContaining({
                bar: 'baz'
            }));
            expect(foo).not.toEqual(jasmine.objectContaining({
                c: 37
            }));
        });

        describe('when used with a spy', () =>  {
            it('is useful for comparing arguments', () =>  {
                var callback = jasmine.createSpy('callback');

                callback({
                    bar: 'baz'
                });

                expect(callback).toHaveBeenCalledWith(jasmine.objectContaining({
                    bar: 'baz'
                }));
            });
        });
    });

    describe('jasmine.arrayContaining', () =>  {
        var foo;

        beforeEach(() =>  {
            foo = [1, 2, 3, 4];
        });

        it('matches arrays with some of the values', () =>  {
            expect(foo).toEqual(jasmine.arrayContaining([3, 1]));
            expect(foo).not.toEqual(jasmine.arrayContaining([6]));
        });

        describe('when used with a spy', () =>  {
            it('is useful when comparing arguments', () =>  {
                var callback = jasmine.createSpy('callback');

                callback([1, 2, 3, 4]);

                expect(callback).toHaveBeenCalledWith(jasmine.arrayContaining([4, 2, 3]));
                expect(callback).not.toHaveBeenCalledWith(jasmine.arrayContaining([5, 2]));
            });
        });
    });

    describe('jasmine.stringMatching', () =>  {
        it('matches as a regexp', () =>  {
            expect({
                foo: 'bar'
            }).toEqual({
                foo: jasmine.stringMatching(/^bar$/)
            });
            expect({
                foo: 'foobarbaz'
            }).toEqual({
                foo: jasmine.stringMatching('bar')
            });
        });

        describe('when used with a spy', () =>  {
            it('is useful for comparing arguments', () =>  {
                var callback = jasmine.createSpy('callback');

                callback('foobarbaz');

                expect(callback).toHaveBeenCalledWith(jasmine.stringMatching('bar'));
                expect(callback).not.toHaveBeenCalledWith(jasmine.stringMatching(/^bar$/));
            });
        });
    });

    describe('custom asymmetry', () =>  {
        var tester = {
            asymmetricMatch: function (actual) {
                var secondValue = actual.split(',')[1];
                return secondValue === 'bar';
            }
        };

        it('dives in deep', () =>  {
            expect('foo,bar,baz,quux').toEqual(tester);
        });

        describe('when used with a spy', () =>  {
            it('is useful for comparing arguments', () =>  {
                var callback = jasmine.createSpy('callback');

                callback('foo,bar,baz');

                expect(callback).toHaveBeenCalledWith(tester);
            });
        });
    });
});

describe('Manually ticking the Jasmine Clock', () =>  {
    var timerCallback;

    beforeEach(() =>  {
        timerCallback = jasmine.createSpy('timerCallback');
        jasmine.clock().install();
    });

    afterEach(() =>  {
        jasmine.clock().uninstall();
    });

    it('causes a timeout to be called synchronously', () =>  {
        setTimeout(() =>  {
            timerCallback();
        }, 100);

        expect(timerCallback).not.toHaveBeenCalled();

        jasmine.clock().tick(101);

        expect(timerCallback).toHaveBeenCalled();
    });

    it('causes an interval to be called synchronously', () =>  {
        setInterval(() =>  {
            timerCallback();
        }, 100);

        expect(timerCallback).not.toHaveBeenCalled();

        jasmine.clock().tick(101);
        expect(timerCallback.calls.count()).toEqual(1);

        jasmine.clock().tick(50);
        expect(timerCallback.calls.count()).toEqual(1);

        jasmine.clock().tick(50);
        expect(timerCallback.calls.count()).toEqual(2);
    });

    describe('Mocking the Date object', () =>  {
        it('mocks the Date object and sets it to a given time', () =>  {
            var baseTime = new Date(2013, 9, 23);

            jasmine.clock().mockDate(baseTime);

            jasmine.clock().tick(50);
            expect(new Date().getTime()).toEqual(baseTime.getTime() + 50);
        });
    });
});

describe('Asynchronous specs', () =>  {
    var value;

    describe('Using callbacks', () =>  {

        beforeEach(function (done) {
            setTimeout(() =>  {
                value = 0;
                done();
            }, 1);
        });

        it('should support async execution of test preparation and expectations', function (done) {
            value++;
            expect(value).toBeGreaterThan(0);
            done();
        });

        describe('A spec using done.fail', () =>  {
            var foo = function (x, callBack1, callBack2) {
                if (x) {
                    setTimeout(callBack1, 0);
                } else {
                    setTimeout(callBack2, 0);
                }
            };

            it('should not call the second callBack', function (done) {
                foo(true,
                    done,
                    () =>  {
                        done.fail('Second callback has been called');
                    }
                );
            });
        });
    });


    describe('Using promises', () =>  {
        if (!browserHasPromises()) {
            return;
        }
        beforeEach(() =>  {
            return soon().then(() =>  {
                value = 0;
            });
        });
        it('should support async execution of test preparation and expectations', () =>  {
            return soon().then(() =>  {
                value++;
                expect(value).toBeGreaterThan(0);
            });
        });
    });

    describe('long asynchronous specs', () =>  {
        beforeEach(function (done) {
            done();
        }, 1000);

        it('takes a long time', function (done) {
            setTimeout(() =>  {
                done();
            }, 9000);
        }, 10000);

        afterEach(function (done) {
            done();
        }, 1000);
    });

    function soon() {
        return new Promise<void>(function (resolve, reject) {
            setTimeout(() =>  {
                resolve();
            }, 1);
        });
    }

    function browserHasPromises() {
        return typeof Promise !== 'undefined';
    }

});
