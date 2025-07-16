import  {gql} from 'apollo-server';

const typeDefs = gql`
  type TblSalesOpportunity {
    id: Int!
    pipelinestageid: Int
    gscustomersid: Int
    contact: Int
    amount: Float
    productid: Int
    description: String
    deleted: Boolean
    closedate: String
    roianalysis: Boolean
    budgetconfirmed: Boolean
    nextstep: String
    name: String
    owner: Int
    assignedto: Int
    type: Int
    source: String
    businessunit: Int
    lossreason: Int
    notes: String
    createddate: String
    modifieddate: String
    iswon: Int
    actualclosedate: String
    probability: Int
    status: String
    salespresenter: String
    tenantid: Int
  }
    type savedOutput{
        name : String
        id : Int
    }

  input CreateOpportunityInput {
    pipelinestageid: Int
    gscustomersid: Int!
    contact: Int
    amount: Float
    productid: Int
    description: String
    closedate: String
    name: String
    owner: Int
    assignedto: Int
    type: Int
    source: String
    businessunit: Int
    lossreason: Int
    notes: String
    probability: Int
    status: String
    salespresenter: String
    tenantid: Int
  }

  type Mutation {
    createOpportunity(data: CreateOpportunityInput!): TblSalesOpportunity!
  }

  type Query {
    getOpportunity(id: Int!): TblSalesOpportunity
    _empty: String
  }
`;

export default typeDefs; 