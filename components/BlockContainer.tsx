import Block from './Block'

export default function Page() {
    const characters : string[] = ["a", "b", "a", "b", "a", "b", "a", "b"]
    return (
        <div>
            <Block characters={characters}/>
        </div>
    );
}