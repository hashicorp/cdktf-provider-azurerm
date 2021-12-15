// https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_cassandra_table.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CosmosdbCassandraTableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_cassandra_table.html#analytical_storage_ttl CosmosdbCassandraTable#analytical_storage_ttl}
  */
  readonly analyticalStorageTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_cassandra_table.html#cassandra_keyspace_id CosmosdbCassandraTable#cassandra_keyspace_id}
  */
  readonly cassandraKeyspaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_cassandra_table.html#default_ttl CosmosdbCassandraTable#default_ttl}
  */
  readonly defaultTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_cassandra_table.html#name CosmosdbCassandraTable#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_cassandra_table.html#throughput CosmosdbCassandraTable#throughput}
  */
  readonly throughput?: number;
  /**
  * autoscale_settings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_cassandra_table.html#autoscale_settings CosmosdbCassandraTable#autoscale_settings}
  */
  readonly autoscaleSettings?: CosmosdbCassandraTableAutoscaleSettings;
  /**
  * schema block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_cassandra_table.html#schema CosmosdbCassandraTable#schema}
  */
  readonly schema: CosmosdbCassandraTableSchema;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_cassandra_table.html#timeouts CosmosdbCassandraTable#timeouts}
  */
  readonly timeouts?: CosmosdbCassandraTableTimeouts;
}
export interface CosmosdbCassandraTableAutoscaleSettings {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_cassandra_table.html#max_throughput CosmosdbCassandraTable#max_throughput}
  */
  readonly maxThroughput?: number;
}

export function cosmosdbCassandraTableAutoscaleSettingsToTerraform(struct?: CosmosdbCassandraTableAutoscaleSettingsOutputReference | CosmosdbCassandraTableAutoscaleSettings): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_throughput: cdktf.numberToTerraform(struct!.maxThroughput),
  }
}

export class CosmosdbCassandraTableAutoscaleSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): CosmosdbCassandraTableAutoscaleSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxThroughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxThroughput = this._maxThroughput;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CosmosdbCassandraTableAutoscaleSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxThroughput = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxThroughput = value.maxThroughput;
    }
  }

  // max_throughput - computed: true, optional: true, required: false
  private _maxThroughput?: number; 
  public get maxThroughput() {
    return this.getNumberAttribute('max_throughput');
  }
  public set maxThroughput(value: number) {
    this._maxThroughput = value;
  }
  public resetMaxThroughput() {
    this._maxThroughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxThroughputInput() {
    return this._maxThroughput;
  }
}
export interface CosmosdbCassandraTableSchemaClusterKey {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_cassandra_table.html#name CosmosdbCassandraTable#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_cassandra_table.html#order_by CosmosdbCassandraTable#order_by}
  */
  readonly orderBy: string;
}

export function cosmosdbCassandraTableSchemaClusterKeyToTerraform(struct?: CosmosdbCassandraTableSchemaClusterKey): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    order_by: cdktf.stringToTerraform(struct!.orderBy),
  }
}

export interface CosmosdbCassandraTableSchemaColumn {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_cassandra_table.html#name CosmosdbCassandraTable#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_cassandra_table.html#type CosmosdbCassandraTable#type}
  */
  readonly type: string;
}

export function cosmosdbCassandraTableSchemaColumnToTerraform(struct?: CosmosdbCassandraTableSchemaColumn): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface CosmosdbCassandraTableSchemaPartitionKey {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_cassandra_table.html#name CosmosdbCassandraTable#name}
  */
  readonly name: string;
}

export function cosmosdbCassandraTableSchemaPartitionKeyToTerraform(struct?: CosmosdbCassandraTableSchemaPartitionKey): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface CosmosdbCassandraTableSchema {
  /**
  * cluster_key block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_cassandra_table.html#cluster_key CosmosdbCassandraTable#cluster_key}
  */
  readonly clusterKey?: CosmosdbCassandraTableSchemaClusterKey[];
  /**
  * column block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_cassandra_table.html#column CosmosdbCassandraTable#column}
  */
  readonly column: CosmosdbCassandraTableSchemaColumn[];
  /**
  * partition_key block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_cassandra_table.html#partition_key CosmosdbCassandraTable#partition_key}
  */
  readonly partitionKey: CosmosdbCassandraTableSchemaPartitionKey[];
}

export function cosmosdbCassandraTableSchemaToTerraform(struct?: CosmosdbCassandraTableSchemaOutputReference | CosmosdbCassandraTableSchema): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_key: cdktf.listMapper(cosmosdbCassandraTableSchemaClusterKeyToTerraform)(struct!.clusterKey),
    column: cdktf.listMapper(cosmosdbCassandraTableSchemaColumnToTerraform)(struct!.column),
    partition_key: cdktf.listMapper(cosmosdbCassandraTableSchemaPartitionKeyToTerraform)(struct!.partitionKey),
  }
}

export class CosmosdbCassandraTableSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): CosmosdbCassandraTableSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterKey = this._clusterKey;
    }
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._partitionKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionKey = this._partitionKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CosmosdbCassandraTableSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterKey = undefined;
      this._column = undefined;
      this._partitionKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterKey = value.clusterKey;
      this._column = value.column;
      this._partitionKey = value.partitionKey;
    }
  }

  // cluster_key - computed: false, optional: true, required: false
  private _clusterKey?: CosmosdbCassandraTableSchemaClusterKey[]; 
  public get clusterKey() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('cluster_key') as any;
  }
  public set clusterKey(value: CosmosdbCassandraTableSchemaClusterKey[]) {
    this._clusterKey = value;
  }
  public resetClusterKey() {
    this._clusterKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterKeyInput() {
    return this._clusterKey;
  }

  // column - computed: false, optional: false, required: true
  private _column?: CosmosdbCassandraTableSchemaColumn[]; 
  public get column() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('column') as any;
  }
  public set column(value: CosmosdbCassandraTableSchemaColumn[]) {
    this._column = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // partition_key - computed: false, optional: false, required: true
  private _partitionKey?: CosmosdbCassandraTableSchemaPartitionKey[]; 
  public get partitionKey() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('partition_key') as any;
  }
  public set partitionKey(value: CosmosdbCassandraTableSchemaPartitionKey[]) {
    this._partitionKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionKeyInput() {
    return this._partitionKey;
  }
}
export interface CosmosdbCassandraTableTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_cassandra_table.html#create CosmosdbCassandraTable#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_cassandra_table.html#delete CosmosdbCassandraTable#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_cassandra_table.html#read CosmosdbCassandraTable#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_cassandra_table.html#update CosmosdbCassandraTable#update}
  */
  readonly update?: string;
}

export function cosmosdbCassandraTableTimeoutsToTerraform(struct?: CosmosdbCassandraTableTimeoutsOutputReference | CosmosdbCassandraTableTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class CosmosdbCassandraTableTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): CosmosdbCassandraTableTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CosmosdbCassandraTableTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_cassandra_table.html azurerm_cosmosdb_cassandra_table}
*/
export class CosmosdbCassandraTable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_cosmosdb_cassandra_table";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/cosmosdb_cassandra_table.html azurerm_cosmosdb_cassandra_table} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CosmosdbCassandraTableConfig
  */
  public constructor(scope: Construct, id: string, config: CosmosdbCassandraTableConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_cosmosdb_cassandra_table',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._analyticalStorageTtl = config.analyticalStorageTtl;
    this._cassandraKeyspaceId = config.cassandraKeyspaceId;
    this._defaultTtl = config.defaultTtl;
    this._name = config.name;
    this._throughput = config.throughput;
    this._autoscaleSettings.internalValue = config.autoscaleSettings;
    this._schema.internalValue = config.schema;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // analytical_storage_ttl - computed: false, optional: true, required: false
  private _analyticalStorageTtl?: number; 
  public get analyticalStorageTtl() {
    return this.getNumberAttribute('analytical_storage_ttl');
  }
  public set analyticalStorageTtl(value: number) {
    this._analyticalStorageTtl = value;
  }
  public resetAnalyticalStorageTtl() {
    this._analyticalStorageTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticalStorageTtlInput() {
    return this._analyticalStorageTtl;
  }

  // cassandra_keyspace_id - computed: false, optional: false, required: true
  private _cassandraKeyspaceId?: string; 
  public get cassandraKeyspaceId() {
    return this.getStringAttribute('cassandra_keyspace_id');
  }
  public set cassandraKeyspaceId(value: string) {
    this._cassandraKeyspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cassandraKeyspaceIdInput() {
    return this._cassandraKeyspaceId;
  }

  // default_ttl - computed: true, optional: true, required: false
  private _defaultTtl?: number; 
  public get defaultTtl() {
    return this.getNumberAttribute('default_ttl');
  }
  public set defaultTtl(value: number) {
    this._defaultTtl = value;
  }
  public resetDefaultTtl() {
    this._defaultTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTtlInput() {
    return this._defaultTtl;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // throughput - computed: true, optional: true, required: false
  private _throughput?: number; 
  public get throughput() {
    return this.getNumberAttribute('throughput');
  }
  public set throughput(value: number) {
    this._throughput = value;
  }
  public resetThroughput() {
    this._throughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputInput() {
    return this._throughput;
  }

  // autoscale_settings - computed: false, optional: true, required: false
  private _autoscaleSettings = new CosmosdbCassandraTableAutoscaleSettingsOutputReference(this as any, "autoscale_settings", true);
  public get autoscaleSettings() {
    return this._autoscaleSettings;
  }
  public putAutoscaleSettings(value: CosmosdbCassandraTableAutoscaleSettings) {
    this._autoscaleSettings.internalValue = value;
  }
  public resetAutoscaleSettings() {
    this._autoscaleSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscaleSettingsInput() {
    return this._autoscaleSettings.internalValue;
  }

  // schema - computed: false, optional: false, required: true
  private _schema = new CosmosdbCassandraTableSchemaOutputReference(this as any, "schema", true);
  public get schema() {
    return this._schema;
  }
  public putSchema(value: CosmosdbCassandraTableSchema) {
    this._schema.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CosmosdbCassandraTableTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CosmosdbCassandraTableTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      analytical_storage_ttl: cdktf.numberToTerraform(this._analyticalStorageTtl),
      cassandra_keyspace_id: cdktf.stringToTerraform(this._cassandraKeyspaceId),
      default_ttl: cdktf.numberToTerraform(this._defaultTtl),
      name: cdktf.stringToTerraform(this._name),
      throughput: cdktf.numberToTerraform(this._throughput),
      autoscale_settings: cosmosdbCassandraTableAutoscaleSettingsToTerraform(this._autoscaleSettings.internalValue),
      schema: cosmosdbCassandraTableSchemaToTerraform(this._schema.internalValue),
      timeouts: cosmosdbCassandraTableTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
