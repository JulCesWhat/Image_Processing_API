import request from 'request';

describe("Server", () => {
    beforeAll(() => {
        require('../index');
    });
    // afterAll(() => {
    //     server.close();
    // });
    describe("GET /api/images?filename=icelandwaterfall&width=200&height=200", () => {
        const data: { status: number } = { status: 0 };
        beforeAll((done) => {
            request.get("http://localhost:3000/api/images?filename=icelandwaterfall&width=200&height=200", (_, response: request.Response) => {
                data.status = response.statusCode;
                done();
            });
        });
        it("Status 200", () => {
            expect(data.status).toBe(200);
        });
    });
    describe("GET /api/images?filename=icelandwaterfall&width=a&height=a", () => {
        const data: { status: number, body: string } = { status: 0, body: '' };
        beforeAll((done) => {
            request.get("http://localhost:3000/api/images?filename=icelandwaterfall&width=a&height=a", (_, response: request.Response, body: string) => {
                data.status = response.statusCode;
                data.body = body;
                done();
            });
        });
        it("Status 400", () => {
            expect(data.status).toBe(400);
        });
        it("Expect body to equal 'The query parameters width and height have to be whole positive numbers'", () => {
            expect(data.body).toEqual('The query parameters width and height have to be whole positive numbers');
        });
    });
});
