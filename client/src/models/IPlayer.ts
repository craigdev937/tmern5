export interface IPlayer {
    _id: string | undefined,
    title: string,
    firstname: string,
    lastname: string,
    age: number,
    info: string,
    player?: IPlayer,
};



