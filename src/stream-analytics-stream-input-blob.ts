// https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_stream_input_blob.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StreamAnalyticsStreamInputBlobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_stream_input_blob.html#date_format StreamAnalyticsStreamInputBlob#date_format}
  */
  readonly dateFormat: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_stream_input_blob.html#name StreamAnalyticsStreamInputBlob#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_stream_input_blob.html#path_pattern StreamAnalyticsStreamInputBlob#path_pattern}
  */
  readonly pathPattern: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_stream_input_blob.html#resource_group_name StreamAnalyticsStreamInputBlob#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_stream_input_blob.html#storage_account_key StreamAnalyticsStreamInputBlob#storage_account_key}
  */
  readonly storageAccountKey: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_stream_input_blob.html#storage_account_name StreamAnalyticsStreamInputBlob#storage_account_name}
  */
  readonly storageAccountName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_stream_input_blob.html#storage_container_name StreamAnalyticsStreamInputBlob#storage_container_name}
  */
  readonly storageContainerName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_stream_input_blob.html#stream_analytics_job_name StreamAnalyticsStreamInputBlob#stream_analytics_job_name}
  */
  readonly streamAnalyticsJobName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_stream_input_blob.html#time_format StreamAnalyticsStreamInputBlob#time_format}
  */
  readonly timeFormat: string;
  /**
  * serialization block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_stream_input_blob.html#serialization StreamAnalyticsStreamInputBlob#serialization}
  */
  readonly serialization: StreamAnalyticsStreamInputBlobSerialization[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_stream_input_blob.html#timeouts StreamAnalyticsStreamInputBlob#timeouts}
  */
  readonly timeouts?: StreamAnalyticsStreamInputBlobTimeouts;
}
export interface StreamAnalyticsStreamInputBlobSerialization {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_stream_input_blob.html#encoding StreamAnalyticsStreamInputBlob#encoding}
  */
  readonly encoding?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_stream_input_blob.html#field_delimiter StreamAnalyticsStreamInputBlob#field_delimiter}
  */
  readonly fieldDelimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_stream_input_blob.html#type StreamAnalyticsStreamInputBlob#type}
  */
  readonly type: string;
}

function streamAnalyticsStreamInputBlobSerializationToTerraform(struct?: StreamAnalyticsStreamInputBlobSerialization): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    encoding: cdktf.stringToTerraform(struct!.encoding),
    field_delimiter: cdktf.stringToTerraform(struct!.fieldDelimiter),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface StreamAnalyticsStreamInputBlobTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_stream_input_blob.html#create StreamAnalyticsStreamInputBlob#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_stream_input_blob.html#delete StreamAnalyticsStreamInputBlob#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_stream_input_blob.html#read StreamAnalyticsStreamInputBlob#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_stream_input_blob.html#update StreamAnalyticsStreamInputBlob#update}
  */
  readonly update?: string;
}

function streamAnalyticsStreamInputBlobTimeoutsToTerraform(struct?: StreamAnalyticsStreamInputBlobTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_stream_input_blob.html azurerm_stream_analytics_stream_input_blob}
*/
export class StreamAnalyticsStreamInputBlob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_stream_analytics_stream_input_blob";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/stream_analytics_stream_input_blob.html azurerm_stream_analytics_stream_input_blob} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StreamAnalyticsStreamInputBlobConfig
  */
  public constructor(scope: Construct, id: string, config: StreamAnalyticsStreamInputBlobConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_stream_analytics_stream_input_blob',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dateFormat = config.dateFormat;
    this._name = config.name;
    this._pathPattern = config.pathPattern;
    this._resourceGroupName = config.resourceGroupName;
    this._storageAccountKey = config.storageAccountKey;
    this._storageAccountName = config.storageAccountName;
    this._storageContainerName = config.storageContainerName;
    this._streamAnalyticsJobName = config.streamAnalyticsJobName;
    this._timeFormat = config.timeFormat;
    this._serialization = config.serialization;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // date_format - computed: false, optional: false, required: true
  private _dateFormat: string;
  public get dateFormat() {
    return this.getStringAttribute('date_format');
  }
  public set dateFormat(value: string) {
    this._dateFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dateFormatInput() {
    return this._dateFormat
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // path_pattern - computed: false, optional: false, required: true
  private _pathPattern: string;
  public get pathPattern() {
    return this.getStringAttribute('path_pattern');
  }
  public set pathPattern(value: string) {
    this._pathPattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathPatternInput() {
    return this._pathPattern
  }

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName: string;
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName
  }

  // storage_account_key - computed: false, optional: false, required: true
  private _storageAccountKey: string;
  public get storageAccountKey() {
    return this.getStringAttribute('storage_account_key');
  }
  public set storageAccountKey(value: string) {
    this._storageAccountKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountKeyInput() {
    return this._storageAccountKey
  }

  // storage_account_name - computed: false, optional: false, required: true
  private _storageAccountName: string;
  public get storageAccountName() {
    return this.getStringAttribute('storage_account_name');
  }
  public set storageAccountName(value: string) {
    this._storageAccountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountNameInput() {
    return this._storageAccountName
  }

  // storage_container_name - computed: false, optional: false, required: true
  private _storageContainerName: string;
  public get storageContainerName() {
    return this.getStringAttribute('storage_container_name');
  }
  public set storageContainerName(value: string) {
    this._storageContainerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageContainerNameInput() {
    return this._storageContainerName
  }

  // stream_analytics_job_name - computed: false, optional: false, required: true
  private _streamAnalyticsJobName: string;
  public get streamAnalyticsJobName() {
    return this.getStringAttribute('stream_analytics_job_name');
  }
  public set streamAnalyticsJobName(value: string) {
    this._streamAnalyticsJobName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamAnalyticsJobNameInput() {
    return this._streamAnalyticsJobName
  }

  // time_format - computed: false, optional: false, required: true
  private _timeFormat: string;
  public get timeFormat() {
    return this.getStringAttribute('time_format');
  }
  public set timeFormat(value: string) {
    this._timeFormat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeFormatInput() {
    return this._timeFormat
  }

  // serialization - computed: false, optional: false, required: true
  private _serialization: StreamAnalyticsStreamInputBlobSerialization[];
  public get serialization() {
    return this.interpolationForAttribute('serialization') as any;
  }
  public set serialization(value: StreamAnalyticsStreamInputBlobSerialization[]) {
    this._serialization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serializationInput() {
    return this._serialization
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: StreamAnalyticsStreamInputBlobTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: StreamAnalyticsStreamInputBlobTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      date_format: cdktf.stringToTerraform(this._dateFormat),
      name: cdktf.stringToTerraform(this._name),
      path_pattern: cdktf.stringToTerraform(this._pathPattern),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      storage_account_key: cdktf.stringToTerraform(this._storageAccountKey),
      storage_account_name: cdktf.stringToTerraform(this._storageAccountName),
      storage_container_name: cdktf.stringToTerraform(this._storageContainerName),
      stream_analytics_job_name: cdktf.stringToTerraform(this._streamAnalyticsJobName),
      time_format: cdktf.stringToTerraform(this._timeFormat),
      serialization: cdktf.listMapper(streamAnalyticsStreamInputBlobSerializationToTerraform)(this._serialization),
      timeouts: streamAnalyticsStreamInputBlobTimeoutsToTerraform(this._timeouts),
    };
  }
}
