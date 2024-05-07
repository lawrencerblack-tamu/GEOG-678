function Run()
{
    // make a JSON object with a sub-object
    var myObject = 
    {
        myValue: 'some text',
        subObject: 
        {
            deeperValue1: 6,
            deeperValue2: "more stuff"
        }
    };

    // log it to the console
    console.log(myObject);
}