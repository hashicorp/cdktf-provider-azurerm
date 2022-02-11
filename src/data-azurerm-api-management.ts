// https://www.terraform.io/docs/providers/azurerm/d/api_management
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermApiManagementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/api_management#name DataAzurermApiManagement#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/api_management#resource_group_name DataAzurermApiManagement#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/api_management#timeouts DataAzurermApiManagement#timeouts}
  */
  readonly timeouts?: DataAzurermApiManagementTimeouts;
}
export class DataAzurermApiManagementAdditionalLocation extends cdktf.ComplexComputedList {

  // capacity - computed: true, optional: false, required: false
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }

  // gateway_regional_url - computed: true, optional: false, required: false
  public get gatewayRegionalUrl() {
    return this.getStringAttribute('gateway_regional_url');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // private_ip_addresses - computed: true, optional: false, required: false
  public get privateIpAddresses() {
    return this.getListAttribute('private_ip_addresses');
  }

  // public_ip_address_id - computed: true, optional: false, required: false
  public get publicIpAddressId() {
    return this.getStringAttribute('public_ip_address_id');
  }

  // public_ip_addresses - computed: true, optional: false, required: false
  public get publicIpAddresses() {
    return this.getListAttribute('public_ip_addresses');
  }

  // zones - computed: true, optional: false, required: false
  public get zones() {
    return this.getListAttribute('zones');
  }
}
export class DataAzurermApiManagementHostnameConfigurationDeveloperPortal extends cdktf.ComplexComputedList {

  // host_name - computed: true, optional: false, required: false
  public get hostName() {
    return this.getStringAttribute('host_name');
  }

  // key_vault_id - computed: true, optional: false, required: false
  public get keyVaultId() {
    return this.getStringAttribute('key_vault_id');
  }

  // negotiate_client_certificate - computed: true, optional: false, required: false
  public get negotiateClientCertificate() {
    return this.getBooleanAttribute('negotiate_client_certificate');
  }
}
export class DataAzurermApiManagementHostnameConfigurationManagement extends cdktf.ComplexComputedList {

  // host_name - computed: true, optional: false, required: false
  public get hostName() {
    return this.getStringAttribute('host_name');
  }

  // key_vault_id - computed: true, optional: false, required: false
  public get keyVaultId() {
    return this.getStringAttribute('key_vault_id');
  }

  // negotiate_client_certificate - computed: true, optional: false, required: false
  public get negotiateClientCertificate() {
    return this.getBooleanAttribute('negotiate_client_certificate');
  }
}
export class DataAzurermApiManagementHostnameConfigurationPortal extends cdktf.ComplexComputedList {

  // host_name - computed: true, optional: false, required: false
  public get hostName() {
    return this.getStringAttribute('host_name');
  }

  // key_vault_id - computed: true, optional: false, required: false
  public get keyVaultId() {
    return this.getStringAttribute('key_vault_id');
  }

  // negotiate_client_certificate - computed: true, optional: false, required: false
  public get negotiateClientCertificate() {
    return this.getBooleanAttribute('negotiate_client_certificate');
  }
}
export class DataAzurermApiManagementHostnameConfigurationProxy extends cdktf.ComplexComputedList {

  // default_ssl_binding - computed: true, optional: false, required: false
  public get defaultSslBinding() {
    return this.getBooleanAttribute('default_ssl_binding');
  }

  // host_name - computed: true, optional: false, required: false
  public get hostName() {
    return this.getStringAttribute('host_name');
  }

  // key_vault_id - computed: true, optional: false, required: false
  public get keyVaultId() {
    return this.getStringAttribute('key_vault_id');
  }

  // negotiate_client_certificate - computed: true, optional: false, required: false
  public get negotiateClientCertificate() {
    return this.getBooleanAttribute('negotiate_client_certificate');
  }
}
export class DataAzurermApiManagementHostnameConfigurationScm extends cdktf.ComplexComputedList {

  // host_name - computed: true, optional: false, required: false
  public get hostName() {
    return this.getStringAttribute('host_name');
  }

  // key_vault_id - computed: true, optional: false, required: false
  public get keyVaultId() {
    return this.getStringAttribute('key_vault_id');
  }

  // negotiate_client_certificate - computed: true, optional: false, required: false
  public get negotiateClientCertificate() {
    return this.getBooleanAttribute('negotiate_client_certificate');
  }
}
export class DataAzurermApiManagementHostnameConfiguration extends cdktf.ComplexComputedList {

  // developer_portal - computed: true, optional: false, required: false
  public get developerPortal() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('developer_portal');
  }

  // management - computed: true, optional: false, required: false
  public get management() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('management');
  }

  // portal - computed: true, optional: false, required: false
  public get portal() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('portal');
  }

  // proxy - computed: true, optional: false, required: false
  public get proxy() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('proxy');
  }

  // scm - computed: true, optional: false, required: false
  public get scm() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('scm');
  }
}
export class DataAzurermApiManagementIdentity extends cdktf.ComplexComputedList {

  // identity_ids - computed: true, optional: false, required: false
  public get identityIds() {
    return this.getListAttribute('identity_ids');
  }

  // principal_id - computed: true, optional: false, required: false
  public get principalId() {
    return this.getStringAttribute('principal_id');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataAzurermApiManagementTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/d/api_management#read DataAzurermApiManagement#read}
  */
  readonly read?: string;
}

export function dataAzurermApiManagementTimeoutsToTerraform(struct?: DataAzurermApiManagementTimeoutsOutputReference | DataAzurermApiManagementTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}

export class DataAzurermApiManagementTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataAzurermApiManagementTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzurermApiManagementTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._read = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/d/api_management azurerm_api_management}
*/
export class DataAzurermApiManagement extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_api_management";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/d/api_management azurerm_api_management} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermApiManagementConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermApiManagementConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_api_management',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_location - computed: true, optional: false, required: false
  public additionalLocation(index: string) {
    return new DataAzurermApiManagementAdditionalLocation(this, 'additional_location', index, false);
  }

  // developer_portal_url - computed: true, optional: false, required: false
  public get developerPortalUrl() {
    return this.getStringAttribute('developer_portal_url');
  }

  // gateway_regional_url - computed: true, optional: false, required: false
  public get gatewayRegionalUrl() {
    return this.getStringAttribute('gateway_regional_url');
  }

  // gateway_url - computed: true, optional: false, required: false
  public get gatewayUrl() {
    return this.getStringAttribute('gateway_url');
  }

  // hostname_configuration - computed: true, optional: false, required: false
  public hostnameConfiguration(index: string) {
    return new DataAzurermApiManagementHostnameConfiguration(this, 'hostname_configuration', index, false);
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity - computed: true, optional: false, required: false
  public identity(index: string) {
    return new DataAzurermApiManagementIdentity(this, 'identity', index, false);
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // management_api_url - computed: true, optional: false, required: false
  public get managementApiUrl() {
    return this.getStringAttribute('management_api_url');
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

  // notification_sender_email - computed: true, optional: false, required: false
  public get notificationSenderEmail() {
    return this.getStringAttribute('notification_sender_email');
  }

  // portal_url - computed: true, optional: false, required: false
  public get portalUrl() {
    return this.getStringAttribute('portal_url');
  }

  // private_ip_addresses - computed: true, optional: false, required: false
  public get privateIpAddresses() {
    return this.getListAttribute('private_ip_addresses');
  }

  // public_ip_address_id - computed: true, optional: false, required: false
  public get publicIpAddressId() {
    return this.getStringAttribute('public_ip_address_id');
  }

  // public_ip_addresses - computed: true, optional: false, required: false
  public get publicIpAddresses() {
    return this.getListAttribute('public_ip_addresses');
  }

  // publisher_email - computed: true, optional: false, required: false
  public get publisherEmail() {
    return this.getStringAttribute('publisher_email');
  }

  // publisher_name - computed: true, optional: false, required: false
  public get publisherName() {
    return this.getStringAttribute('publisher_name');
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

  // scm_url - computed: true, optional: false, required: false
  public get scmUrl() {
    return this.getStringAttribute('scm_url');
  }

  // sku_name - computed: true, optional: false, required: false
  public get skuName() {
    return this.getStringAttribute('sku_name');
  }

  // tags - computed: true, optional: false, required: false
  public tags(key: string): string | cdktf.IResolvable {
    return new cdktf.StringMap(this, 'tags').lookup(key);
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAzurermApiManagementTimeoutsOutputReference(this, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAzurermApiManagementTimeouts) {
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
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: dataAzurermApiManagementTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
