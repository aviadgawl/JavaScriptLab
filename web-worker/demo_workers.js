let e = new Date().getTime() + (1 * 1000);

while (true)
{
    if (new Date().getTime() <= e) {
        postMessage(new Date().getSeconds());
        e = new Date().getTime() + (1 * 1000);
    };
}