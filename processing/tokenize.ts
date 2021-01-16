import tokens from "./tokens";

const symbols = tokens.map(({ token }: { token: string }) => token);

const getLargestNumber = (input: string) => {
    const pattern = /^[\d.]+/;
    return pattern.exec(input);
}

export default (input: string): Array<string> => {

    let output: Array<string> = [];

    for (let i = 0; i < input.length; ++i) {
        const curr = input[i];

        if (curr === '.' || curr.match(/\d/)) {
            let number = getLargestNumber(input.substr(i));
            const nextChar = number ? number[0] : curr;
            output = [...output, nextChar];
            i += nextChar.length - 1;
        }
        else if (!curr.match(/\w/)) {
            output = [...output, curr];
        }
        else {

        }

    }

    return output;
}
