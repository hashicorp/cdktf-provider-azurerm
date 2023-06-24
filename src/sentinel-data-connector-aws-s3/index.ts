// https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/sentinel_data_connector_aws_s3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SentinelDataConnectorAwsS3Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/sentinel_data_connector_aws_s3#aws_role_arn SentinelDataConnectorAwsS3#aws_role_arn}
  */
  readonly awsRoleArn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/sentinel_data_connector_aws_s3#destination_table SentinelDataConnectorAwsS3#destination_table}
  */
  readonly destinationTable: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/sentinel_data_connector_aws_s3#id SentinelDataConnectorAwsS3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/sentinel_data_connector_aws_s3#log_analytics_workspace_id SentinelDataConnectorAwsS3#log_analytics_workspace_id}
  */
  readonly logAnalyticsWorkspaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/sentinel_data_connector_aws_s3#name SentinelDataConnectorAwsS3#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/sentinel_data_connector_aws_s3#sqs_urls SentinelDataConnectorAwsS3#sqs_urls}
  */
  readonly sqsUrls: string[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/sentinel_data_connector_aws_s3#timeouts SentinelDataConnectorAwsS3#timeouts}
  */
  readonly timeouts?: SentinelDataConnectorAwsS3Timeouts;
}
export interface SentinelDataConnectorAwsS3Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/sentinel_data_connector_aws_s3#create SentinelDataConnectorAwsS3#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/sentinel_data_connector_aws_s3#delete SentinelDataConnectorAwsS3#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/sentinel_data_connector_aws_s3#read SentinelDataConnectorAwsS3#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/sentinel_data_connector_aws_s3#update SentinelDataConnectorAwsS3#update}
  */
  readonly update?: string;
}

export function sentinelDataConnectorAwsS3TimeoutsToTerraform(struct?: SentinelDataConnectorAwsS3Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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

export class SentinelDataConnectorAwsS3TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SentinelDataConnectorAwsS3Timeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: SentinelDataConnectorAwsS3Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/sentinel_data_connector_aws_s3 azurerm_sentinel_data_connector_aws_s3}
*/
export class SentinelDataConnectorAwsS3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_sentinel_data_connector_aws_s3";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/sentinel_data_connector_aws_s3 azurerm_sentinel_data_connector_aws_s3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SentinelDataConnectorAwsS3Config
  */
  public constructor(scope: Construct, id: string, config: SentinelDataConnectorAwsS3Config) {
    super(scope, id, {
      terraformResourceType: 'azurerm_sentinel_data_connector_aws_s3',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '3.62.1',
        providerVersionConstraint: '~> 3.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._awsRoleArn = config.awsRoleArn;
    this._destinationTable = config.destinationTable;
    this._id = config.id;
    this._logAnalyticsWorkspaceId = config.logAnalyticsWorkspaceId;
    this._name = config.name;
    this._sqsUrls = config.sqsUrls;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_role_arn - computed: false, optional: false, required: true
  private _awsRoleArn?: string; 
  public get awsRoleArn() {
    return this.getStringAttribute('aws_role_arn');
  }
  public set awsRoleArn(value: string) {
    this._awsRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRoleArnInput() {
    return this._awsRoleArn;
  }

  // destination_table - computed: false, optional: false, required: true
  private _destinationTable?: string; 
  public get destinationTable() {
    return this.getStringAttribute('destination_table');
  }
  public set destinationTable(value: string) {
    this._destinationTable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationTableInput() {
    return this._destinationTable;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // log_analytics_workspace_id - computed: false, optional: false, required: true
  private _logAnalyticsWorkspaceId?: string; 
  public get logAnalyticsWorkspaceId() {
    return this.getStringAttribute('log_analytics_workspace_id');
  }
  public set logAnalyticsWorkspaceId(value: string) {
    this._logAnalyticsWorkspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logAnalyticsWorkspaceIdInput() {
    return this._logAnalyticsWorkspaceId;
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

  // sqs_urls - computed: false, optional: false, required: true
  private _sqsUrls?: string[]; 
  public get sqsUrls() {
    return this.getListAttribute('sqs_urls');
  }
  public set sqsUrls(value: string[]) {
    this._sqsUrls = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqsUrlsInput() {
    return this._sqsUrls;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SentinelDataConnectorAwsS3TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SentinelDataConnectorAwsS3Timeouts) {
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
      aws_role_arn: cdktf.stringToTerraform(this._awsRoleArn),
      destination_table: cdktf.stringToTerraform(this._destinationTable),
      id: cdktf.stringToTerraform(this._id),
      log_analytics_workspace_id: cdktf.stringToTerraform(this._logAnalyticsWorkspaceId),
      name: cdktf.stringToTerraform(this._name),
      sqs_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sqsUrls),
      timeouts: sentinelDataConnectorAwsS3TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
