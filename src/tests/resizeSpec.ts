import resize from '../utilities/resize';

it('expect resize("santamonica", 100, 100) to equal santamonica_100_100.jpg', async () => {
    const newFilename = await resize('santamonica', 100, 100);
    expect(newFilename).toEqual('thumbs/santamonica_100_100.jpg');
});
it('expect resize("fjord", 100, 100) to equal fjord_100_100.jpg', async () => {
    const newFilename = await resize('fjord', 100, 100);
    expect(newFilename).toEqual('thumbs/fjord_100_100.jpg');
});
