// https://www.terraform.io/docs/providers/azurerm/r/servicebus_topic_authorization_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServicebusTopicAuthorizationRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_topic_authorization_rule.html#listen ServicebusTopicAuthorizationRule#listen}
  */
  readonly listen?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_topic_authorization_rule.html#manage ServicebusTopicAuthorizationRule#manage}
  */
  readonly manage?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_topic_authorization_rule.html#name ServicebusTopicAuthorizationRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_topic_authorization_rule.html#namespace_name ServicebusTopicAuthorizationRule#namespace_name}
  */
  readonly namespaceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_topic_authorization_rule.html#resource_group_name ServicebusTopicAuthorizationRule#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_topic_authorization_rule.html#send ServicebusTopicAuthorizationRule#send}
  */
  readonly send?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_topic_authorization_rule.html#topic_name ServicebusTopicAuthorizationRule#topic_name}
  */
  readonly topicName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_topic_authorization_rule.html#timeouts ServicebusTopicAuthorizationRule#timeouts}
  */
  readonly timeouts?: ServicebusTopicAuthorizationRuleTimeouts;
}
export interface ServicebusTopicAuthorizationRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_topic_authorization_rule.html#create ServicebusTopicAuthorizationRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_topic_authorization_rule.html#delete ServicebusTopicAuthorizationRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_topic_authorization_rule.html#read ServicebusTopicAuthorizationRule#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_topic_authorization_rule.html#update ServicebusTopicAuthorizationRule#update}
  */
  readonly update?: string;
}

export function servicebusTopicAuthorizationRuleTimeoutsToTerraform(struct?: ServicebusTopicAuthorizationRuleTimeoutsOutputReference | ServicebusTopicAuthorizationRuleTimeouts): any {
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

export class ServicebusTopicAuthorizationRuleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): ServicebusTopicAuthorizationRuleTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
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

  public set internalValue(value: ServicebusTopicAuthorizationRuleTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_topic_authorization_rule.html azurerm_servicebus_topic_authorization_rule}
*/
export class ServicebusTopicAuthorizationRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_servicebus_topic_authorization_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/servicebus_topic_authorization_rule.html azurerm_servicebus_topic_authorization_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServicebusTopicAuthorizationRuleConfig
  */
  public constructor(scope: Construct, id: string, config: ServicebusTopicAuthorizationRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_servicebus_topic_authorization_rule',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._listen = config.listen;
    this._manage = config.manage;
    this._name = config.name;
    this._namespaceName = config.namespaceName;
    this._resourceGroupName = config.resourceGroupName;
    this._send = config.send;
    this._topicName = config.topicName;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // listen - computed: false, optional: true, required: false
  private _listen?: boolean | cdktf.IResolvable; 
  public get listen() {
    return this.getBooleanAttribute('listen') as any;
  }
  public set listen(value: boolean | cdktf.IResolvable) {
    this._listen = value;
  }
  public resetListen() {
    this._listen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenInput() {
    return this._listen;
  }

  // manage - computed: false, optional: true, required: false
  private _manage?: boolean | cdktf.IResolvable; 
  public get manage() {
    return this.getBooleanAttribute('manage') as any;
  }
  public set manage(value: boolean | cdktf.IResolvable) {
    this._manage = value;
  }
  public resetManage() {
    this._manage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageInput() {
    return this._manage;
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

  // namespace_name - computed: false, optional: false, required: true
  private _namespaceName?: string; 
  public get namespaceName() {
    return this.getStringAttribute('namespace_name');
  }
  public set namespaceName(value: string) {
    this._namespaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceNameInput() {
    return this._namespaceName;
  }

  // primary_connection_string - computed: true, optional: false, required: false
  public get primaryConnectionString() {
    return this.getStringAttribute('primary_connection_string');
  }

  // primary_connection_string_alias - computed: true, optional: false, required: false
  public get primaryConnectionStringAlias() {
    return this.getStringAttribute('primary_connection_string_alias');
  }

  // primary_key - computed: true, optional: false, required: false
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
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

  // secondary_connection_string - computed: true, optional: false, required: false
  public get secondaryConnectionString() {
    return this.getStringAttribute('secondary_connection_string');
  }

  // secondary_connection_string_alias - computed: true, optional: false, required: false
  public get secondaryConnectionStringAlias() {
    return this.getStringAttribute('secondary_connection_string_alias');
  }

  // secondary_key - computed: true, optional: false, required: false
  public get secondaryKey() {
    return this.getStringAttribute('secondary_key');
  }

  // send - computed: false, optional: true, required: false
  private _send?: boolean | cdktf.IResolvable; 
  public get send() {
    return this.getBooleanAttribute('send') as any;
  }
  public set send(value: boolean | cdktf.IResolvable) {
    this._send = value;
  }
  public resetSend() {
    this._send = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendInput() {
    return this._send;
  }

  // topic_name - computed: false, optional: false, required: true
  private _topicName?: string; 
  public get topicName() {
    return this.getStringAttribute('topic_name');
  }
  public set topicName(value: string) {
    this._topicName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicNameInput() {
    return this._topicName;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ServicebusTopicAuthorizationRuleTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ServicebusTopicAuthorizationRuleTimeouts) {
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
      listen: cdktf.booleanToTerraform(this._listen),
      manage: cdktf.booleanToTerraform(this._manage),
      name: cdktf.stringToTerraform(this._name),
      namespace_name: cdktf.stringToTerraform(this._namespaceName),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      send: cdktf.booleanToTerraform(this._send),
      topic_name: cdktf.stringToTerraform(this._topicName),
      timeouts: servicebusTopicAuthorizationRuleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
