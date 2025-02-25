import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { QueryCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import { baristaInstance, baristaTeamInstance } from "./barista";

const client = new DynamoDBClient({region: 'us-east-1'});
const docClient = DynamoDBDocumentClient.from(client);

// TODO: Get this from somewhere else later
const tableName = "BaristaTeamInstanceTest";

const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max);
}


const getBaristaTeamInstance = async (round: string) : Promise<baristaTeamInstance | null> => {
  const command = new QueryCommand({
    TableName: tableName,
    KeyConditionExpression:
      "round = :round",
    ExpressionAttributeValues: {
      ":round": parseInt(round)
    },
    ConsistentRead: false,
  });
  let response = null;

  try {
    response = await docClient.send(command);
    console.log("RESPONSE");
    console.log(response);
  
    // Validate response
    if (!response.Items || response.Items.length < 1) {
      throw new Error("No Results found for BaristaTeamInstance Query, round:" + round);
    }
  
    // Take Random Team out of query result
    const queryItems = response.Items as baristaTeamInstance[];
    return queryItems[getRandomInt(response.Items.length - 1)];

  } catch(e : any) {
    console.error("ERROR - " + e.message);
    return null;
  }
};

export { getBaristaTeamInstance }