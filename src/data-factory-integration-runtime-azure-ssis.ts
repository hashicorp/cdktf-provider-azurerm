// https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFactoryIntegrationRuntimeAzureSsisConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis#data_factory_id DataFactoryIntegrationRuntimeAzureSsis#data_factory_id}
  */
  readonly dataFactoryId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis#data_factory_name DataFactoryIntegrationRuntimeAzureSsis#data_factory_name}
  */
  readonly dataFactoryName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis#description DataFactoryIntegrationRuntimeAzureSsis#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis#edition DataFactoryIntegrationRuntimeAzureSsis#edition}
  */
  readonly edition?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis#license_type DataFactoryIntegrationRuntimeAzureSsis#license_type}
  */
  readonly licenseType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis#location DataFactoryIntegrationRuntimeAzureSsis#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis#max_parallel_executions_per_node DataFactoryIntegrationRuntimeAzureSsis#max_parallel_executions_per_node}
  */
  readonly maxParallelExecutionsPerNode?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis#name DataFactoryIntegrationRuntimeAzureSsis#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis#node_size DataFactoryIntegrationRuntimeAzureSsis#node_size}
  */
  readonly nodeSize: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis#number_of_nodes DataFactoryIntegrationRuntimeAzureSsis#number_of_nodes}
  */
  readonly numberOfNodes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis#resource_group_name DataFactoryIntegrationRuntimeAzureSsis#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * catalog_info block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis#catalog_info DataFactoryIntegrationRuntimeAzureSsis#catalog_info}
  */
  readonly catalogInfo?: DataFactoryIntegrationRuntimeAzureSsisCatalogInfo;
  /**
  * custom_setup_script block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis#custom_setup_script DataFactoryIntegrationRuntimeAzureSsis#custom_setup_script}
  */
  readonly customSetupScript?: DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript;
  /**
  * express_custom_setup block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis#express_custom_setup DataFactoryIntegrationRuntimeAzureSsis#express_custom_setup}
  */
  readonly expressCustomSetup?: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup;
  /**
  * package_store block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis#package_store DataFactoryIntegrationRuntimeAzureSsis#package_store}
  */
  readonly packageStore?: DataFactoryIntegrationRuntimeAzureSsisPackageStore[] | cdktf.IResolvable;
  /**
  * proxy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis#proxy DataFactoryIntegrationRuntimeAzureSsis#proxy}
  */
  readonly proxy?: DataFactoryIntegrationRuntimeAzureSsisProxy;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis#timeouts DataFactoryIntegrationRuntimeAzureSsis#timeouts}
  */
  readonly timeouts?: DataFactoryIntegrationRuntimeAzureSsisTimeouts;
  /**
  * vnet_integration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis#vnet_integration DataFactoryIntegrationRuntimeAzureSsis#vnet_integration}
  */
  readonly vnetIntegration?: DataFactoryIntegrationRuntimeAzureSsisVnetIntegration;
}
export interface DataFactoryIntegrationRuntimeAzureSsisCatalogInfo {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis#administrator_login DataFactoryIntegrationRuntimeAzureSsis#administrator_login}
  */
  readonly administratorLogin?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis#administrator_password DataFactoryIntegrationRuntimeAzureSsis#administrator_password}
  */
  readonly administratorPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis#dual_standby_pair_name DataFactoryIntegrationRuntimeAzureSsis#dual_standby_pair_name}
  */
  readonly dualStandbyPairName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis#pricing_tier DataFactoryIntegrationRuntimeAzureSsis#pricing_tier}
  */
  readonly pricingTier?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis#server_endpoint DataFactoryIntegrationRuntimeAzureSsis#server_endpoint}
  */
  readonly serverEndpoint: string;
}

export function dataFactoryIntegrationRuntimeAzureSsisCatalogInfoToTerraform(struct?: DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference | DataFactoryIntegrationRuntimeAzureSsisCatalogInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    administrator_login: cdktf.stringToTerraform(struct!.administratorLogin),
    administrator_password: cdktf.stringToTerraform(struct!.administratorPassword),
    dual_standby_pair_name: cdktf.stringToTerraform(struct!.dualStandbyPairName),
    pricing_tier: cdktf.stringToTerraform(struct!.pricingTier),
    server_endpoint: cdktf.stringToTerraform(struct!.serverEndpoint),
  }
}

export class DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataFactoryIntegrationRuntimeAzureSsisCatalogInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._administratorLogin !== undefined) {
      hasAnyValues = true;
      internalValueResult.administratorLogin = this._administratorLogin;
    }
    if (this._administratorPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.administratorPassword = this._administratorPassword;
    }
    if (this._dualStandbyPairName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dualStandbyPairName = this._dualStandbyPairName;
    }
    if (this._pricingTier !== undefined) {
      hasAnyValues = true;
      internalValueResult.pricingTier = this._pricingTier;
    }
    if (this._serverEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverEndpoint = this._serverEndpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFactoryIntegrationRuntimeAzureSsisCatalogInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._administratorLogin = undefined;
      this._administratorPassword = undefined;
      this._dualStandbyPairName = undefined;
      this._pricingTier = undefined;
      this._serverEndpoint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._administratorLogin = value.administratorLogin;
      this._administratorPassword = value.administratorPassword;
      this._dualStandbyPairName = value.dualStandbyPairName;
      this._pricingTier = value.pricingTier;
      this._serverEndpoint = value.serverEndpoint;
    }
  }

  // administrator_login - computed: false, optional: true, required: false
  private _administratorLogin?: string; 
  public get administratorLogin() {
    return this.getStringAttribute('administrator_login');
  }
  public set administratorLogin(value: string) {
    this._administratorLogin = value;
  }
  public resetAdministratorLogin() {
    this._administratorLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administratorLoginInput() {
    return this._administratorLogin;
  }

  // administrator_password - computed: false, optional: true, required: false
  private _administratorPassword?: string; 
  public get administratorPassword() {
    return this.getStringAttribute('administrator_password');
  }
  public set administratorPassword(value: string) {
    this._administratorPassword = value;
  }
  public resetAdministratorPassword() {
    this._administratorPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administratorPasswordInput() {
    return this._administratorPassword;
  }

  // dual_standby_pair_name - computed: false, optional: true, required: false
  private _dualStandbyPairName?: string; 
  public get dualStandbyPairName() {
    return this.getStringAttribute('dual_standby_pair_name');
  }
  public set dualStandbyPairName(value: string) {
    this._dualStandbyPairName = value;
  }
  public resetDualStandbyPairName() {
    this._dualStandbyPairName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dualStandbyPairNameInput() {
    return this._dualStandbyPairName;
  }

  // pricing_tier - computed: false, optional: true, required: false
  private _pricingTier?: string; 
  public get pricingTier() {
    return this.getStringAttribute('pricing_tier');
  }
  public set pricingTier(value: string) {
    this._pricingTier = value;
  }
  public resetPricingTier() {
    this._pricingTier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pricingTierInput() {
    return this._pricingTier;
  }

  // server_endpoint - computed: false, optional: false, required: true
  private _serverEndpoint?: string; 
  public get serverEndpoint() {
    return this.getStringAttribute('server_endpoint');
  }
  public set serverEndpoint(value: string) {
    this._serverEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverEndpointInput() {
    return this._serverEndpoint;
  }
}
export interface DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis#blob_container_uri DataFactoryIntegrationRuntimeAzureSsis#blob_container_uri}
  */
  readonly blobContainerUri: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis#sas_token DataFactoryIntegrationRuntimeAzureSsis#sas_token}
  */
  readonly sasToken: string;
}

export function dataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptToTerraform(struct?: DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference | DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blob_container_uri: cdktf.stringToTerraform(struct!.blobContainerUri),
    sas_token: cdktf.stringToTerraform(struct!.sasToken),
  }
}

export class DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blobContainerUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.blobContainerUri = this._blobContainerUri;
    }
    if (this._sasToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.sasToken = this._sasToken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blobContainerUri = undefined;
      this._sasToken = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blobContainerUri = value.blobContainerUri;
      this._sasToken = value.sasToken;
    }
  }

  // blob_container_uri - computed: false, optional: false, required: true
  private _blobContainerUri?: string; 
  public get blobContainerUri() {
    return this.getStringAttribute('blob_container_uri');
  }
  public set blobContainerUri(value: string) {
    this._blobContainerUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blobContainerUriInput() {
    return this._blobContainerUri;
  }

  // sas_token - computed: false, optional: false, required: true
  private _sasToken?: string; 
  public get sasToken() {
    return this.getStringAttribute('sas_token');
  }
  public set sasToken(value: string) {
    this._sasToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sasTokenInput() {
    return this._sasToken;
  }
}
export interface DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis#linked_service_name DataFactoryIntegrationRuntimeAzureSsis#linked_service_name}
  */
  readonly linkedServiceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis#parameters DataFactoryIntegrationRuntimeAzureSsis#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis#secret_name DataFactoryIntegrationRuntimeAzureSsis#secret_name}
  */
  readonly secretName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis#secret_version DataFactoryIntegrationRuntimeAzureSsis#secret_version}
  */
  readonly secretVersion?: string;
}

export function dataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordToTerraform(struct?: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference | DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    linked_service_name: cdktf.stringToTerraform(struct!.linkedServiceName),
    parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.parameters),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    secret_version: cdktf.stringToTerraform(struct!.secretVersion),
  }
}

export class DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._linkedServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkedServiceName = this._linkedServiceName;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    if (this._secretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersion = this._secretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._linkedServiceName = undefined;
      this._parameters = undefined;
      this._secretName = undefined;
      this._secretVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._linkedServiceName = value.linkedServiceName;
      this._parameters = value.parameters;
      this._secretName = value.secretName;
      this._secretVersion = value.secretVersion;
    }
  }

  // linked_service_name - computed: false, optional: false, required: true
  private _linkedServiceName?: string; 
  public get linkedServiceName() {
    return this.getStringAttribute('linked_service_name');
  }
  public set linkedServiceName(value: string) {
    this._linkedServiceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linkedServiceNameInput() {
    return this._linkedServiceName;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }

  // secret_version - computed: false, optional: true, required: false
  private _secretVersion?: string; 
  public get secretVersion() {
    return this.getStringAttribute('secret_version');
  }
  public set secretVersion(value: string) {
    this._secretVersion = value;
  }
  public resetSecretVersion() {
    this._secretVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionInput() {
    return this._secretVersion;
  }
}
export interface DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis#password DataFactoryIntegrationRuntimeAzureSsis#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis#target_name DataFactoryIntegrationRuntimeAzureSsis#target_name}
  */
  readonly targetName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis#user_name DataFactoryIntegrationRuntimeAzureSsis#user_name}
  */
  readonly userName: string;
  /**
  * key_vault_password block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis#key_vault_password DataFactoryIntegrationRuntimeAzureSsis#key_vault_password}
  */
  readonly keyVaultPassword?: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPassword;
}

export function dataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyToTerraform(struct?: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    target_name: cdktf.stringToTerraform(struct!.targetName),
    user_name: cdktf.stringToTerraform(struct!.userName),
    key_vault_password: dataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyKeyVaultPasswordToTerraform(struct!.keyVaultPassword),
  }
}

export interface DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis#linked_service_name DataFactoryIntegrationRuntimeAzureSsis#linked_service_name}
  */
  readonly linkedServiceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis#parameters DataFactoryIntegrationRuntimeAzureSsis#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis#secret_name DataFactoryIntegrationRuntimeAzureSsis#secret_name}
  */
  readonly secretName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis#secret_version DataFactoryIntegrationRuntimeAzureSsis#secret_version}
  */
  readonly secretVersion?: string;
}

export function dataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseToTerraform(struct?: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference | DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    linked_service_name: cdktf.stringToTerraform(struct!.linkedServiceName),
    parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.parameters),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    secret_version: cdktf.stringToTerraform(struct!.secretVersion),
  }
}

export class DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._linkedServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkedServiceName = this._linkedServiceName;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    if (this._secretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersion = this._secretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._linkedServiceName = undefined;
      this._parameters = undefined;
      this._secretName = undefined;
      this._secretVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._linkedServiceName = value.linkedServiceName;
      this._parameters = value.parameters;
      this._secretName = value.secretName;
      this._secretVersion = value.secretVersion;
    }
  }

  // linked_service_name - computed: false, optional: false, required: true
  private _linkedServiceName?: string; 
  public get linkedServiceName() {
    return this.getStringAttribute('linked_service_name');
  }
  public set linkedServiceName(value: string) {
    this._linkedServiceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get linkedServiceNameInput() {
    return this._linkedServiceName;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }

  // secret_version - computed: false, optional: true, required: false
  private _secretVersion?: string; 
  public get secretVersion() {
    return this.getStringAttribute('secret_version');
  }
  public set secretVersion(value: string) {
    this._secretVersion = value;
  }
  public resetSecretVersion() {
    this._secretVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionInput() {
    return this._secretVersion;
  }
}
export interface DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponent {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis#license DataFactoryIntegrationRuntimeAzureSsis#license}
  */
  readonly license?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis#name DataFactoryIntegrationRuntimeAzureSsis#name}
  */
  readonly name: string;
  /**
  * key_vault_license block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis#key_vault_license DataFactoryIntegrationRuntimeAzureSsis#key_vault_license}
  */
  readonly keyVaultLicense?: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicense;
}

export function dataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentToTerraform(struct?: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    license: cdktf.stringToTerraform(struct!.license),
    name: cdktf.stringToTerraform(struct!.name),
    key_vault_license: dataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentKeyVaultLicenseToTerraform(struct!.keyVaultLicense),
  }
}

export interface DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis#environment DataFactoryIntegrationRuntimeAzureSsis#environment}
  */
  readonly environment?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis#powershell_version DataFactoryIntegrationRuntimeAzureSsis#powershell_version}
  */
  readonly powershellVersion?: string;
  /**
  * command_key block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis#command_key DataFactoryIntegrationRuntimeAzureSsis#command_key}
  */
  readonly commandKey?: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey[] | cdktf.IResolvable;
  /**
  * component block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis#component DataFactoryIntegrationRuntimeAzureSsis#component}
  */
  readonly component?: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponent[] | cdktf.IResolvable;
}

export function dataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupToTerraform(struct?: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference | DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    environment: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.environment),
    powershell_version: cdktf.stringToTerraform(struct!.powershellVersion),
    command_key: cdktf.listMapper(dataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKeyToTerraform)(struct!.commandKey),
    component: cdktf.listMapper(dataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponentToTerraform)(struct!.component),
  }
}

export class DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._powershellVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.powershellVersion = this._powershellVersion;
    }
    if (this._commandKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.commandKey = this._commandKey;
    }
    if (this._component !== undefined) {
      hasAnyValues = true;
      internalValueResult.component = this._component;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._environment = undefined;
      this._powershellVersion = undefined;
      this._commandKey = undefined;
      this._component = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._environment = value.environment;
      this._powershellVersion = value.powershellVersion;
      this._commandKey = value.commandKey;
      this._component = value.component;
    }
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: { [key: string]: string }; 
  public get environment() {
    return this.getStringMapAttribute('environment');
  }
  public set environment(value: { [key: string]: string }) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // powershell_version - computed: false, optional: true, required: false
  private _powershellVersion?: string; 
  public get powershellVersion() {
    return this.getStringAttribute('powershell_version');
  }
  public set powershellVersion(value: string) {
    this._powershellVersion = value;
  }
  public resetPowershellVersion() {
    this._powershellVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get powershellVersionInput() {
    return this._powershellVersion;
  }

  // command_key - computed: false, optional: true, required: false
  private _commandKey?: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey[] | cdktf.IResolvable; 
  public get commandKey() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('command_key');
  }
  public set commandKey(value: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupCommandKey[] | cdktf.IResolvable) {
    this._commandKey = value;
  }
  public resetCommandKey() {
    this._commandKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandKeyInput() {
    return this._commandKey;
  }

  // component - computed: false, optional: true, required: false
  private _component?: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponent[] | cdktf.IResolvable; 
  public get component() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('component');
  }
  public set component(value: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupComponent[] | cdktf.IResolvable) {
    this._component = value;
  }
  public resetComponent() {
    this._component = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentInput() {
    return this._component;
  }
}
export interface DataFactoryIntegrationRuntimeAzureSsisPackageStore {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis#linked_service_name DataFactoryIntegrationRuntimeAzureSsis#linked_service_name}
  */
  readonly linkedServiceName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis#name DataFactoryIntegrationRuntimeAzureSsis#name}
  */
  readonly name: string;
}

export function dataFactoryIntegrationRuntimeAzureSsisPackageStoreToTerraform(struct?: DataFactoryIntegrationRuntimeAzureSsisPackageStore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    linked_service_name: cdktf.stringToTerraform(struct!.linkedServiceName),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface DataFactoryIntegrationRuntimeAzureSsisProxy {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis#path DataFactoryIntegrationRuntimeAzureSsis#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis#self_hosted_integration_runtime_name DataFactoryIntegrationRuntimeAzureSsis#self_hosted_integration_runtime_name}
  */
  readonly selfHostedIntegrationRuntimeName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis#staging_storage_linked_service_name DataFactoryIntegrationRuntimeAzureSsis#staging_storage_linked_service_name}
  */
  readonly stagingStorageLinkedServiceName: string;
}

export function dataFactoryIntegrationRuntimeAzureSsisProxyToTerraform(struct?: DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference | DataFactoryIntegrationRuntimeAzureSsisProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    self_hosted_integration_runtime_name: cdktf.stringToTerraform(struct!.selfHostedIntegrationRuntimeName),
    staging_storage_linked_service_name: cdktf.stringToTerraform(struct!.stagingStorageLinkedServiceName),
  }
}

export class DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataFactoryIntegrationRuntimeAzureSsisProxy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._selfHostedIntegrationRuntimeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfHostedIntegrationRuntimeName = this._selfHostedIntegrationRuntimeName;
    }
    if (this._stagingStorageLinkedServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.stagingStorageLinkedServiceName = this._stagingStorageLinkedServiceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFactoryIntegrationRuntimeAzureSsisProxy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
      this._selfHostedIntegrationRuntimeName = undefined;
      this._stagingStorageLinkedServiceName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
      this._selfHostedIntegrationRuntimeName = value.selfHostedIntegrationRuntimeName;
      this._stagingStorageLinkedServiceName = value.stagingStorageLinkedServiceName;
    }
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // self_hosted_integration_runtime_name - computed: false, optional: false, required: true
  private _selfHostedIntegrationRuntimeName?: string; 
  public get selfHostedIntegrationRuntimeName() {
    return this.getStringAttribute('self_hosted_integration_runtime_name');
  }
  public set selfHostedIntegrationRuntimeName(value: string) {
    this._selfHostedIntegrationRuntimeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selfHostedIntegrationRuntimeNameInput() {
    return this._selfHostedIntegrationRuntimeName;
  }

  // staging_storage_linked_service_name - computed: false, optional: false, required: true
  private _stagingStorageLinkedServiceName?: string; 
  public get stagingStorageLinkedServiceName() {
    return this.getStringAttribute('staging_storage_linked_service_name');
  }
  public set stagingStorageLinkedServiceName(value: string) {
    this._stagingStorageLinkedServiceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stagingStorageLinkedServiceNameInput() {
    return this._stagingStorageLinkedServiceName;
  }
}
export interface DataFactoryIntegrationRuntimeAzureSsisTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis#create DataFactoryIntegrationRuntimeAzureSsis#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis#delete DataFactoryIntegrationRuntimeAzureSsis#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis#read DataFactoryIntegrationRuntimeAzureSsis#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis#update DataFactoryIntegrationRuntimeAzureSsis#update}
  */
  readonly update?: string;
}

export function dataFactoryIntegrationRuntimeAzureSsisTimeoutsToTerraform(struct?: DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference | DataFactoryIntegrationRuntimeAzureSsisTimeouts | cdktf.IResolvable): any {
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

export class DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataFactoryIntegrationRuntimeAzureSsisTimeouts | undefined {
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

  public set internalValue(value: DataFactoryIntegrationRuntimeAzureSsisTimeouts | undefined) {
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
export interface DataFactoryIntegrationRuntimeAzureSsisVnetIntegration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis#public_ips DataFactoryIntegrationRuntimeAzureSsis#public_ips}
  */
  readonly publicIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis#subnet_id DataFactoryIntegrationRuntimeAzureSsis#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis#subnet_name DataFactoryIntegrationRuntimeAzureSsis#subnet_name}
  */
  readonly subnetName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis#vnet_id DataFactoryIntegrationRuntimeAzureSsis#vnet_id}
  */
  readonly vnetId?: string;
}

export function dataFactoryIntegrationRuntimeAzureSsisVnetIntegrationToTerraform(struct?: DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference | DataFactoryIntegrationRuntimeAzureSsisVnetIntegration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_ips: cdktf.listMapper(cdktf.stringToTerraform)(struct!.publicIps),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    subnet_name: cdktf.stringToTerraform(struct!.subnetName),
    vnet_id: cdktf.stringToTerraform(struct!.vnetId),
  }
}

export class DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataFactoryIntegrationRuntimeAzureSsisVnetIntegration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publicIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIps = this._publicIps;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._subnetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetName = this._subnetName;
    }
    if (this._vnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnetId = this._vnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFactoryIntegrationRuntimeAzureSsisVnetIntegration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._publicIps = undefined;
      this._subnetId = undefined;
      this._subnetName = undefined;
      this._vnetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._publicIps = value.publicIps;
      this._subnetId = value.subnetId;
      this._subnetName = value.subnetName;
      this._vnetId = value.vnetId;
    }
  }

  // public_ips - computed: false, optional: true, required: false
  private _publicIps?: string[]; 
  public get publicIps() {
    return this.getListAttribute('public_ips');
  }
  public set publicIps(value: string[]) {
    this._publicIps = value;
  }
  public resetPublicIps() {
    this._publicIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpsInput() {
    return this._publicIps;
  }

  // subnet_id - computed: false, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // subnet_name - computed: false, optional: true, required: false
  private _subnetName?: string; 
  public get subnetName() {
    return this.getStringAttribute('subnet_name');
  }
  public set subnetName(value: string) {
    this._subnetName = value;
  }
  public resetSubnetName() {
    this._subnetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetNameInput() {
    return this._subnetName;
  }

  // vnet_id - computed: false, optional: true, required: false
  private _vnetId?: string; 
  public get vnetId() {
    return this.getStringAttribute('vnet_id');
  }
  public set vnetId(value: string) {
    this._vnetId = value;
  }
  public resetVnetId() {
    this._vnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetIdInput() {
    return this._vnetId;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis azurerm_data_factory_integration_runtime_azure_ssis}
*/
export class DataFactoryIntegrationRuntimeAzureSsis extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_data_factory_integration_runtime_azure_ssis";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_azure_ssis azurerm_data_factory_integration_runtime_azure_ssis} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFactoryIntegrationRuntimeAzureSsisConfig
  */
  public constructor(scope: Construct, id: string, config: DataFactoryIntegrationRuntimeAzureSsisConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_data_factory_integration_runtime_azure_ssis',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._dataFactoryId = config.dataFactoryId;
    this._dataFactoryName = config.dataFactoryName;
    this._description = config.description;
    this._edition = config.edition;
    this._licenseType = config.licenseType;
    this._location = config.location;
    this._maxParallelExecutionsPerNode = config.maxParallelExecutionsPerNode;
    this._name = config.name;
    this._nodeSize = config.nodeSize;
    this._numberOfNodes = config.numberOfNodes;
    this._resourceGroupName = config.resourceGroupName;
    this._catalogInfo.internalValue = config.catalogInfo;
    this._customSetupScript.internalValue = config.customSetupScript;
    this._expressCustomSetup.internalValue = config.expressCustomSetup;
    this._packageStore = config.packageStore;
    this._proxy.internalValue = config.proxy;
    this._timeouts.internalValue = config.timeouts;
    this._vnetIntegration.internalValue = config.vnetIntegration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_factory_id - computed: true, optional: true, required: false
  private _dataFactoryId?: string; 
  public get dataFactoryId() {
    return this.getStringAttribute('data_factory_id');
  }
  public set dataFactoryId(value: string) {
    this._dataFactoryId = value;
  }
  public resetDataFactoryId() {
    this._dataFactoryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFactoryIdInput() {
    return this._dataFactoryId;
  }

  // data_factory_name - computed: true, optional: true, required: false
  private _dataFactoryName?: string; 
  public get dataFactoryName() {
    return this.getStringAttribute('data_factory_name');
  }
  public set dataFactoryName(value: string) {
    this._dataFactoryName = value;
  }
  public resetDataFactoryName() {
    this._dataFactoryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFactoryNameInput() {
    return this._dataFactoryName;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // edition - computed: false, optional: true, required: false
  private _edition?: string; 
  public get edition() {
    return this.getStringAttribute('edition');
  }
  public set edition(value: string) {
    this._edition = value;
  }
  public resetEdition() {
    this._edition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get editionInput() {
    return this._edition;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // license_type - computed: false, optional: true, required: false
  private _licenseType?: string; 
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }
  public set licenseType(value: string) {
    this._licenseType = value;
  }
  public resetLicenseType() {
    this._licenseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseTypeInput() {
    return this._licenseType;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // max_parallel_executions_per_node - computed: false, optional: true, required: false
  private _maxParallelExecutionsPerNode?: number; 
  public get maxParallelExecutionsPerNode() {
    return this.getNumberAttribute('max_parallel_executions_per_node');
  }
  public set maxParallelExecutionsPerNode(value: number) {
    this._maxParallelExecutionsPerNode = value;
  }
  public resetMaxParallelExecutionsPerNode() {
    this._maxParallelExecutionsPerNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxParallelExecutionsPerNodeInput() {
    return this._maxParallelExecutionsPerNode;
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

  // node_size - computed: false, optional: false, required: true
  private _nodeSize?: string; 
  public get nodeSize() {
    return this.getStringAttribute('node_size');
  }
  public set nodeSize(value: string) {
    this._nodeSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSizeInput() {
    return this._nodeSize;
  }

  // number_of_nodes - computed: false, optional: true, required: false
  private _numberOfNodes?: number; 
  public get numberOfNodes() {
    return this.getNumberAttribute('number_of_nodes');
  }
  public set numberOfNodes(value: number) {
    this._numberOfNodes = value;
  }
  public resetNumberOfNodes() {
    this._numberOfNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfNodesInput() {
    return this._numberOfNodes;
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

  // catalog_info - computed: false, optional: true, required: false
  private _catalogInfo = new DataFactoryIntegrationRuntimeAzureSsisCatalogInfoOutputReference(this, "catalog_info", true);
  public get catalogInfo() {
    return this._catalogInfo;
  }
  public putCatalogInfo(value: DataFactoryIntegrationRuntimeAzureSsisCatalogInfo) {
    this._catalogInfo.internalValue = value;
  }
  public resetCatalogInfo() {
    this._catalogInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInfoInput() {
    return this._catalogInfo.internalValue;
  }

  // custom_setup_script - computed: false, optional: true, required: false
  private _customSetupScript = new DataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptOutputReference(this, "custom_setup_script", true);
  public get customSetupScript() {
    return this._customSetupScript;
  }
  public putCustomSetupScript(value: DataFactoryIntegrationRuntimeAzureSsisCustomSetupScript) {
    this._customSetupScript.internalValue = value;
  }
  public resetCustomSetupScript() {
    this._customSetupScript.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSetupScriptInput() {
    return this._customSetupScript.internalValue;
  }

  // express_custom_setup - computed: false, optional: true, required: false
  private _expressCustomSetup = new DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupOutputReference(this, "express_custom_setup", true);
  public get expressCustomSetup() {
    return this._expressCustomSetup;
  }
  public putExpressCustomSetup(value: DataFactoryIntegrationRuntimeAzureSsisExpressCustomSetup) {
    this._expressCustomSetup.internalValue = value;
  }
  public resetExpressCustomSetup() {
    this._expressCustomSetup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressCustomSetupInput() {
    return this._expressCustomSetup.internalValue;
  }

  // package_store - computed: false, optional: true, required: false
  private _packageStore?: DataFactoryIntegrationRuntimeAzureSsisPackageStore[] | cdktf.IResolvable; 
  public get packageStore() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('package_store');
  }
  public set packageStore(value: DataFactoryIntegrationRuntimeAzureSsisPackageStore[] | cdktf.IResolvable) {
    this._packageStore = value;
  }
  public resetPackageStore() {
    this._packageStore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageStoreInput() {
    return this._packageStore;
  }

  // proxy - computed: false, optional: true, required: false
  private _proxy = new DataFactoryIntegrationRuntimeAzureSsisProxyOutputReference(this, "proxy", true);
  public get proxy() {
    return this._proxy;
  }
  public putProxy(value: DataFactoryIntegrationRuntimeAzureSsisProxy) {
    this._proxy.internalValue = value;
  }
  public resetProxy() {
    this._proxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataFactoryIntegrationRuntimeAzureSsisTimeoutsOutputReference(this, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataFactoryIntegrationRuntimeAzureSsisTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vnet_integration - computed: false, optional: true, required: false
  private _vnetIntegration = new DataFactoryIntegrationRuntimeAzureSsisVnetIntegrationOutputReference(this, "vnet_integration", true);
  public get vnetIntegration() {
    return this._vnetIntegration;
  }
  public putVnetIntegration(value: DataFactoryIntegrationRuntimeAzureSsisVnetIntegration) {
    this._vnetIntegration.internalValue = value;
  }
  public resetVnetIntegration() {
    this._vnetIntegration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetIntegrationInput() {
    return this._vnetIntegration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_factory_id: cdktf.stringToTerraform(this._dataFactoryId),
      data_factory_name: cdktf.stringToTerraform(this._dataFactoryName),
      description: cdktf.stringToTerraform(this._description),
      edition: cdktf.stringToTerraform(this._edition),
      license_type: cdktf.stringToTerraform(this._licenseType),
      location: cdktf.stringToTerraform(this._location),
      max_parallel_executions_per_node: cdktf.numberToTerraform(this._maxParallelExecutionsPerNode),
      name: cdktf.stringToTerraform(this._name),
      node_size: cdktf.stringToTerraform(this._nodeSize),
      number_of_nodes: cdktf.numberToTerraform(this._numberOfNodes),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      catalog_info: dataFactoryIntegrationRuntimeAzureSsisCatalogInfoToTerraform(this._catalogInfo.internalValue),
      custom_setup_script: dataFactoryIntegrationRuntimeAzureSsisCustomSetupScriptToTerraform(this._customSetupScript.internalValue),
      express_custom_setup: dataFactoryIntegrationRuntimeAzureSsisExpressCustomSetupToTerraform(this._expressCustomSetup.internalValue),
      package_store: cdktf.listMapper(dataFactoryIntegrationRuntimeAzureSsisPackageStoreToTerraform)(this._packageStore),
      proxy: dataFactoryIntegrationRuntimeAzureSsisProxyToTerraform(this._proxy.internalValue),
      timeouts: dataFactoryIntegrationRuntimeAzureSsisTimeoutsToTerraform(this._timeouts.internalValue),
      vnet_integration: dataFactoryIntegrationRuntimeAzureSsisVnetIntegrationToTerraform(this._vnetIntegration.internalValue),
    };
  }
}
