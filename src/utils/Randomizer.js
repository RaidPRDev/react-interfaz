class Randomizer
{
    constructor()
    {

    }

    static getUniqueString(len = 36, start = 2, end = 9)
    {
        return Math.random().toString(len).substr(start, end);
    }



}

export default Randomizer