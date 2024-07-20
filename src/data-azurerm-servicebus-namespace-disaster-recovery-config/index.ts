// https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/data-sources/servicebus_namespace_disaster_recovery_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#alias_authorization_rule_id DataAzurermServicebusNamespaceDisasterRecoveryConfig#alias_authorization_rule_id}
  */
  readonly aliasAuthorizationRuleId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#id DataAzurermServicebusNamespaceDisasterRecoveryConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#name DataAzurermServicebusNamespaceDisasterRecoveryConfig#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#namespace_id DataAzurermServicebusNamespaceDisasterRecoveryConfig#namespace_id}
  */
  readonly namespaceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#namespace_name DataAzurermServicebusNamespaceDisasterRecoveryConfig#namespace_name}
  */
  readonly namespaceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#resource_group_name DataAzurermServicebusNamespaceDisasterRecoveryConfig#resource_group_name}
  */
  readonly resourceGroupName?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#timeouts DataAzurermServicebusNamespaceDisasterRecoveryConfig#timeouts}
  */
  readonly timeouts?: DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts;
}
export interface DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#read DataAzurermServicebusNamespaceDisasterRecoveryConfig#read}
  */
  readonly read?: string;
}

export function dataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsToTerraform(struct?: DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsToHclTerraform(struct?: DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/data-sources/servicebus_namespace_disaster_recovery_config azurerm_servicebus_namespace_disaster_recovery_config}
*/
export class DataAzurermServicebusNamespaceDisasterRecoveryConfig extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_servicebus_namespace_disaster_recovery_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAzurermServicebusNamespaceDisasterRecoveryConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAzurermServicebusNamespaceDisasterRecoveryConfig to import
  * @param importFromId The id of the existing DataAzurermServicebusNamespaceDisasterRecoveryConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/data-sources/servicebus_namespace_disaster_recovery_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAzurermServicebusNamespaceDisasterRecoveryConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_servicebus_namespace_disaster_recovery_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/data-sources/servicebus_namespace_disaster_recovery_config azurerm_servicebus_namespace_disaster_recovery_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermServicebusNamespaceDisasterRecoveryConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_servicebus_namespace_disaster_recovery_config',
      terraformGeneratorMetadata: {
        providerName: 'azurerm',
        providerVersion: '3.113.0',
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
    this._aliasAuthorizationRuleId = config.aliasAuthorizationRuleId;
    this._id = config.id;
    this._name = config.name;
    this._namespaceId = config.namespaceId;
    this._namespaceName = config.namespaceName;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias_authorization_rule_id - computed: false, optional: true, required: false
  private _aliasAuthorizationRuleId?: string; 
  public get aliasAuthorizationRuleId() {
    return this.getStringAttribute('alias_authorization_rule_id');
  }
  public set aliasAuthorizationRuleId(value: string) {
    this._aliasAuthorizationRuleId = value;
  }
  public resetAliasAuthorizationRuleId() {
    this._aliasAuthorizationRuleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasAuthorizationRuleIdInput() {
    return this._aliasAuthorizationRuleId;
  }

  // default_primary_key - computed: true, optional: false, required: false
  public get defaultPrimaryKey() {
    return this.getStringAttribute('default_primary_key');
  }

  // default_secondary_key - computed: true, optional: false, required: false
  public get defaultSecondaryKey() {
    return this.getStringAttribute('default_secondary_key');
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

  // namespace_id - computed: false, optional: true, required: false
  private _namespaceId?: string; 
  public get namespaceId() {
    return this.getStringAttribute('namespace_id');
  }
  public set namespaceId(value: string) {
    this._namespaceId = value;
  }
  public resetNamespaceId() {
    this._namespaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceIdInput() {
    return this._namespaceId;
  }

  // namespace_name - computed: false, optional: true, required: false
  private _namespaceName?: string; 
  public get namespaceName() {
    return this.getStringAttribute('namespace_name');
  }
  public set namespaceName(value: string) {
    this._namespaceName = value;
  }
  public resetNamespaceName() {
    this._namespaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceNameInput() {
    return this._namespaceName;
  }

  // partner_namespace_id - computed: true, optional: false, required: false
  public get partnerNamespaceId() {
    return this.getStringAttribute('partner_namespace_id');
  }

  // primary_connection_string_alias - computed: true, optional: false, required: false
  public get primaryConnectionStringAlias() {
    return this.getStringAttribute('primary_connection_string_alias');
  }

  // resource_group_name - computed: false, optional: true, required: false
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  public resetResourceGroupName() {
    this._resourceGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
  }

  // secondary_connection_string_alias - computed: true, optional: false, required: false
  public get secondaryConnectionStringAlias() {
    return this.getStringAttribute('secondary_connection_string_alias');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts) {
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
      alias_authorization_rule_id: cdktf.stringToTerraform(this._aliasAuthorizationRuleId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      namespace_id: cdktf.stringToTerraform(this._namespaceId),
      namespace_name: cdktf.stringToTerraform(this._namespaceName),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: dataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alias_authorization_rule_id: {
        value: cdktf.stringToHclTerraform(this._aliasAuthorizationRuleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace_id: {
        value: cdktf.stringToHclTerraform(this._namespaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace_name: {
        value: cdktf.stringToHclTerraform(this._namespaceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: dataAzurermServicebusNamespaceDisasterRecoveryConfigTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataAzurermServicebusNamespaceDisasterRecoveryConfigTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
