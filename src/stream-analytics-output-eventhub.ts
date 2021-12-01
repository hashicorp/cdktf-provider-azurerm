// https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_output_eventhub.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StreamAnalyticsOutputEventhubConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_output_eventhub.html#eventhub_name StreamAnalyticsOutputEventhub#eventhub_name}
  */
  readonly eventhubName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_output_eventhub.html#name StreamAnalyticsOutputEventhub#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_output_eventhub.html#partition_key StreamAnalyticsOutputEventhub#partition_key}
  */
  readonly partitionKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_output_eventhub.html#property_columns StreamAnalyticsOutputEventhub#property_columns}
  */
  readonly propertyColumns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_output_eventhub.html#resource_group_name StreamAnalyticsOutputEventhub#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_output_eventhub.html#servicebus_namespace StreamAnalyticsOutputEventhub#servicebus_namespace}
  */
  readonly servicebusNamespace: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_output_eventhub.html#shared_access_policy_key StreamAnalyticsOutputEventhub#shared_access_policy_key}
  */
  readonly sharedAccessPolicyKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_output_eventhub.html#shared_access_policy_name StreamAnalyticsOutputEventhub#shared_access_policy_name}
  */
  readonly sharedAccessPolicyName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_output_eventhub.html#stream_analytics_job_name StreamAnalyticsOutputEventhub#stream_analytics_job_name}
  */
  readonly streamAnalyticsJobName: string;
  /**
  * serialization block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_output_eventhub.html#serialization StreamAnalyticsOutputEventhub#serialization}
  */
  readonly serialization: StreamAnalyticsOutputEventhubSerialization;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_output_eventhub.html#timeouts StreamAnalyticsOutputEventhub#timeouts}
  */
  readonly timeouts?: StreamAnalyticsOutputEventhubTimeouts;
}
export interface StreamAnalyticsOutputEventhubSerialization {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_output_eventhub.html#encoding StreamAnalyticsOutputEventhub#encoding}
  */
  readonly encoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_output_eventhub.html#field_delimiter StreamAnalyticsOutputEventhub#field_delimiter}
  */
  readonly fieldDelimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_output_eventhub.html#format StreamAnalyticsOutputEventhub#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_output_eventhub.html#type StreamAnalyticsOutputEventhub#type}
  */
  readonly type: string;
}

export function streamAnalyticsOutputEventhubSerializationToTerraform(struct?: StreamAnalyticsOutputEventhubSerializationOutputReference | StreamAnalyticsOutputEventhubSerialization): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encoding: cdktf.stringToTerraform(struct!.encoding),
    field_delimiter: cdktf.stringToTerraform(struct!.fieldDelimiter),
    format: cdktf.stringToTerraform(struct!.format),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export class StreamAnalyticsOutputEventhubSerializationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): StreamAnalyticsOutputEventhubSerialization | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._encoding) {
      hasAnyValues = true;
      internalValueResult.encoding = this._encoding;
    }
    if (this._fieldDelimiter) {
      hasAnyValues = true;
      internalValueResult.fieldDelimiter = this._fieldDelimiter;
    }
    if (this._format) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._type) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StreamAnalyticsOutputEventhubSerialization | undefined) {
    if (value === undefined) {
      this._encoding = undefined;
      this._fieldDelimiter = undefined;
      this._format = undefined;
      this._type = undefined;
    }
    else {
      this._encoding = value.encoding;
      this._fieldDelimiter = value.fieldDelimiter;
      this._format = value.format;
      this._type = value.type;
    }
  }

  // encoding - computed: false, optional: true, required: false
  private _encoding?: string; 
  public get encoding() {
    return this.getStringAttribute('encoding');
  }
  public set encoding(value: string) {
    this._encoding = value;
  }
  public resetEncoding() {
    this._encoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingInput() {
    return this._encoding;
  }

  // field_delimiter - computed: false, optional: true, required: false
  private _fieldDelimiter?: string; 
  public get fieldDelimiter() {
    return this.getStringAttribute('field_delimiter');
  }
  public set fieldDelimiter(value: string) {
    this._fieldDelimiter = value;
  }
  public resetFieldDelimiter() {
    this._fieldDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldDelimiterInput() {
    return this._fieldDelimiter;
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface StreamAnalyticsOutputEventhubTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_output_eventhub.html#create StreamAnalyticsOutputEventhub#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_output_eventhub.html#delete StreamAnalyticsOutputEventhub#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_output_eventhub.html#read StreamAnalyticsOutputEventhub#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_output_eventhub.html#update StreamAnalyticsOutputEventhub#update}
  */
  readonly update?: string;
}

export function streamAnalyticsOutputEventhubTimeoutsToTerraform(struct?: StreamAnalyticsOutputEventhubTimeoutsOutputReference | StreamAnalyticsOutputEventhubTimeouts): any {
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

export class StreamAnalyticsOutputEventhubTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): StreamAnalyticsOutputEventhubTimeouts | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._create) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StreamAnalyticsOutputEventhubTimeouts | undefined) {
    if (value === undefined) {
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_output_eventhub.html azurerm_stream_analytics_output_eventhub}
*/
export class StreamAnalyticsOutputEventhub extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_stream_analytics_output_eventhub";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_output_eventhub.html azurerm_stream_analytics_output_eventhub} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StreamAnalyticsOutputEventhubConfig
  */
  public constructor(scope: Construct, id: string, config: StreamAnalyticsOutputEventhubConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_stream_analytics_output_eventhub',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._eventhubName = config.eventhubName;
    this._name = config.name;
    this._partitionKey = config.partitionKey;
    this._propertyColumns = config.propertyColumns;
    this._resourceGroupName = config.resourceGroupName;
    this._servicebusNamespace = config.servicebusNamespace;
    this._sharedAccessPolicyKey = config.sharedAccessPolicyKey;
    this._sharedAccessPolicyName = config.sharedAccessPolicyName;
    this._streamAnalyticsJobName = config.streamAnalyticsJobName;
    this._serialization.internalValue = config.serialization;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // eventhub_name - computed: false, optional: false, required: true
  private _eventhubName?: string; 
  public get eventhubName() {
    return this.getStringAttribute('eventhub_name');
  }
  public set eventhubName(value: string) {
    this._eventhubName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventhubNameInput() {
    return this._eventhubName;
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

  // partition_key - computed: false, optional: true, required: false
  private _partitionKey?: string; 
  public get partitionKey() {
    return this.getStringAttribute('partition_key');
  }
  public set partitionKey(value: string) {
    this._partitionKey = value;
  }
  public resetPartitionKey() {
    this._partitionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionKeyInput() {
    return this._partitionKey;
  }

  // property_columns - computed: false, optional: true, required: false
  private _propertyColumns?: string[]; 
  public get propertyColumns() {
    return this.getListAttribute('property_columns');
  }
  public set propertyColumns(value: string[]) {
    this._propertyColumns = value;
  }
  public resetPropertyColumns() {
    this._propertyColumns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyColumnsInput() {
    return this._propertyColumns;
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // servicebus_namespace - computed: false, optional: false, required: true
  private _servicebusNamespace?: string; 
  public get servicebusNamespace() {
    return this.getStringAttribute('servicebus_namespace');
  }
  public set servicebusNamespace(value: string) {
    this._servicebusNamespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicebusNamespaceInput() {
    return this._servicebusNamespace;
  }

  // shared_access_policy_key - computed: false, optional: false, required: true
  private _sharedAccessPolicyKey?: string; 
  public get sharedAccessPolicyKey() {
    return this.getStringAttribute('shared_access_policy_key');
  }
  public set sharedAccessPolicyKey(value: string) {
    this._sharedAccessPolicyKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedAccessPolicyKeyInput() {
    return this._sharedAccessPolicyKey;
  }

  // shared_access_policy_name - computed: false, optional: false, required: true
  private _sharedAccessPolicyName?: string; 
  public get sharedAccessPolicyName() {
    return this.getStringAttribute('shared_access_policy_name');
  }
  public set sharedAccessPolicyName(value: string) {
    this._sharedAccessPolicyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedAccessPolicyNameInput() {
    return this._sharedAccessPolicyName;
  }

  // stream_analytics_job_name - computed: false, optional: false, required: true
  private _streamAnalyticsJobName?: string; 
  public get streamAnalyticsJobName() {
    return this.getStringAttribute('stream_analytics_job_name');
  }
  public set streamAnalyticsJobName(value: string) {
    this._streamAnalyticsJobName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamAnalyticsJobNameInput() {
    return this._streamAnalyticsJobName;
  }

  // serialization - computed: false, optional: false, required: true
  private _serialization = new StreamAnalyticsOutputEventhubSerializationOutputReference(this as any, "serialization", true);
  public get serialization() {
    return this._serialization;
  }
  public putSerialization(value: StreamAnalyticsOutputEventhubSerialization) {
    this._serialization.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serializationInput() {
    return this._serialization.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new StreamAnalyticsOutputEventhubTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: StreamAnalyticsOutputEventhubTimeouts) {
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
      eventhub_name: cdktf.stringToTerraform(this._eventhubName),
      name: cdktf.stringToTerraform(this._name),
      partition_key: cdktf.stringToTerraform(this._partitionKey),
      property_columns: cdktf.listMapper(cdktf.stringToTerraform)(this._propertyColumns),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      servicebus_namespace: cdktf.stringToTerraform(this._servicebusNamespace),
      shared_access_policy_key: cdktf.stringToTerraform(this._sharedAccessPolicyKey),
      shared_access_policy_name: cdktf.stringToTerraform(this._sharedAccessPolicyName),
      stream_analytics_job_name: cdktf.stringToTerraform(this._streamAnalyticsJobName),
      serialization: streamAnalyticsOutputEventhubSerializationToTerraform(this._serialization.internalValue),
      timeouts: streamAnalyticsOutputEventhubTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
