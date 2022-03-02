/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { KustoManagementClient } = require("@azure/arm-kusto");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Returns the list of attached database configurations of the given Kusto cluster.
 *
 * @summary Returns the list of attached database configurations of the given Kusto cluster.
 * x-ms-original-file: specification/azure-kusto/resource-manager/Microsoft.Kusto/stable/2022-02-01/examples/KustoAttachedDatabaseConfigurationsListByCluster.json
 */
async function kustoAttachedDatabaseConfigurationsListByCluster() {
  const subscriptionId = "12345678-1234-1234-1234-123456789098";
  const resourceGroupName = "kustorptest";
  const clusterName = "kustoCluster2";
  const credential = new DefaultAzureCredential();
  const client = new KustoManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.attachedDatabaseConfigurations.listByCluster(
    resourceGroupName,
    clusterName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

kustoAttachedDatabaseConfigurationsListByCluster().catch(console.error);