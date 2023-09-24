const { buildSchema } = require("graphql");

module.exports = buildSchema(` 
    type TestData{
        text: String!
        views: Int!
    }

    type RootQuery {
        hello: TestData!
    } 
    
    schema{
        query: RootQuery
    }
`);
// 느낌표를 붙인 것은 필수라는 것임
