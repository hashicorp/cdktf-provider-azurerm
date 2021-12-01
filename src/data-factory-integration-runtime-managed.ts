// https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_managed.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFactoryIntegrationRuntimeManagedConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_managed.html#data_factory_name DataFactoryIntegrationRuntimeManaged#data_factory_name}
  */
  readonly dataFactoryName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_managed.html#description DataFactoryIntegrationRuntimeManaged#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_managed.html#edition DataFactoryIntegrationRuntimeManaged#edition}
  */
  readonly edition?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_managed.html#license_type DataFactoryIntegrationRuntimeManaged#license_type}
  */
  readonly licenseType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_managed.html#location DataFactoryIntegrationRuntimeManaged#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_managed.html#max_parallel_executions_per_node DataFactoryIntegrationRuntimeManaged#max_parallel_executions_per_node}
  */
  readonly maxParallelExecutionsPerNode?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_managed.html#name DataFactoryIntegrationRuntimeManaged#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_managed.html#node_size DataFactoryIntegrationRuntimeManaged#node_size}
  */
  readonly nodeSize: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_managed.html#number_of_nodes DataFactoryIntegrationRuntimeManaged#number_of_nodes}
  */
  readonly numberOfNodes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_managed.html#resource_group_name DataFactoryIntegrationRuntimeManaged#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * catalog_info block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_managed.html#catalog_info DataFactoryIntegrationRuntimeManaged#catalog_info}
  */
  readonly catalogInfo?: DataFactoryIntegrationRuntimeManagedCatalogInfo;
  /**
  * custom_setup_script block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_managed.html#custom_setup_script DataFactoryIntegrationRuntimeManaged#custom_setup_script}
  */
  readonly customSetupScript?: DataFactoryIntegrationRuntimeManagedCustomSetupScript;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_managed.html#timeouts DataFactoryIntegrationRuntimeManaged#timeouts}
  */
  readonly timeouts?: DataFactoryIntegrationRuntimeManagedTimeouts;
  /**
  * vnet_integration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_managed.html#vnet_integration DataFactoryIntegrationRuntimeManaged#vnet_integration}
  */
  readonly vnetIntegration?: DataFactoryIntegrationRuntimeManagedVnetIntegration;
}
export interface DataFactoryIntegrationRuntimeManagedCatalogInfo {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_managed.html#administrator_login DataFactoryIntegrationRuntimeManaged#administrator_login}
  */
  readonly administratorLogin?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_managed.html#administrator_password DataFactoryIntegrationRuntimeManaged#administrator_password}
  */
  readonly administratorPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_managed.html#pricing_tier DataFactoryIntegrationRuntimeManaged#pricing_tier}
  */
  readonly pricingTier?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_managed.html#server_endpoint DataFactoryIntegrationRuntimeManaged#server_endpoint}
  */
  readonly serverEndpoint: string;
}

export function dataFactoryIntegrationRuntimeManagedCatalogInfoToTerraform(struct?: DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference | DataFactoryIntegrationRuntimeManagedCatalogInfo): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    administrator_login: cdktf.stringToTerraform(struct!.administratorLogin),
    administrator_password: cdktf.stringToTerraform(struct!.administratorPassword),
    pricing_tier: cdktf.stringToTerraform(struct!.pricingTier),
    server_endpoint: cdktf.stringToTerraform(struct!.serverEndpoint),
  }
}

export class DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataFactoryIntegrationRuntimeManagedCatalogInfo | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._administratorLogin) {
      hasAnyValues = true;
      internalValueResult.administratorLogin = this._administratorLogin;
    }
    if (this._administratorPassword) {
      hasAnyValues = true;
      internalValueResult.administratorPassword = this._administratorPassword;
    }
    if (this._pricingTier) {
      hasAnyValues = true;
      internalValueResult.pricingTier = this._pricingTier;
    }
    if (this._serverEndpoint) {
      hasAnyValues = true;
      internalValueResult.serverEndpoint = this._serverEndpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFactoryIntegrationRuntimeManagedCatalogInfo | undefined) {
    if (value === undefined) {
      this._administratorLogin = undefined;
      this._administratorPassword = undefined;
      this._pricingTier = undefined;
      this._serverEndpoint = undefined;
    }
    else {
      this._administratorLogin = value.administratorLogin;
      this._administratorPassword = value.administratorPassword;
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
export interface DataFactoryIntegrationRuntimeManagedCustomSetupScript {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_managed.html#blob_container_uri DataFactoryIntegrationRuntimeManaged#blob_container_uri}
  */
  readonly blobContainerUri: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_managed.html#sas_token DataFactoryIntegrationRuntimeManaged#sas_token}
  */
  readonly sasToken: string;
}

export function dataFactoryIntegrationRuntimeManagedCustomSetupScriptToTerraform(struct?: DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference | DataFactoryIntegrationRuntimeManagedCustomSetupScript): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blob_container_uri: cdktf.stringToTerraform(struct!.blobContainerUri),
    sas_token: cdktf.stringToTerraform(struct!.sasToken),
  }
}

export class DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataFactoryIntegrationRuntimeManagedCustomSetupScript | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._blobContainerUri) {
      hasAnyValues = true;
      internalValueResult.blobContainerUri = this._blobContainerUri;
    }
    if (this._sasToken) {
      hasAnyValues = true;
      internalValueResult.sasToken = this._sasToken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFactoryIntegrationRuntimeManagedCustomSetupScript | undefined) {
    if (value === undefined) {
      this._blobContainerUri = undefined;
      this._sasToken = undefined;
    }
    else {
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
export interface DataFactoryIntegrationRuntimeManagedTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_managed.html#create DataFactoryIntegrationRuntimeManaged#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_managed.html#delete DataFactoryIntegrationRuntimeManaged#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_managed.html#read DataFactoryIntegrationRuntimeManaged#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_managed.html#update DataFactoryIntegrationRuntimeManaged#update}
  */
  readonly update?: string;
}

export function dataFactoryIntegrationRuntimeManagedTimeoutsToTerraform(struct?: DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference | DataFactoryIntegrationRuntimeManagedTimeouts): any {
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

export class DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataFactoryIntegrationRuntimeManagedTimeouts | undefined {
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

  public set internalValue(value: DataFactoryIntegrationRuntimeManagedTimeouts | undefined) {
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
export interface DataFactoryIntegrationRuntimeManagedVnetIntegration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_managed.html#subnet_name DataFactoryIntegrationRuntimeManaged#subnet_name}
  */
  readonly subnetName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_managed.html#vnet_id DataFactoryIntegrationRuntimeManaged#vnet_id}
  */
  readonly vnetId: string;
}

export function dataFactoryIntegrationRuntimeManagedVnetIntegrationToTerraform(struct?: DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference | DataFactoryIntegrationRuntimeManagedVnetIntegration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet_name: cdktf.stringToTerraform(struct!.subnetName),
    vnet_id: cdktf.stringToTerraform(struct!.vnetId),
  }
}

export class DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): DataFactoryIntegrationRuntimeManagedVnetIntegration | undefined {
    let hasAnyValues = false;
    const internalValueResult: any = {};
    if (this._subnetName) {
      hasAnyValues = true;
      internalValueResult.subnetName = this._subnetName;
    }
    if (this._vnetId) {
      hasAnyValues = true;
      internalValueResult.vnetId = this._vnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFactoryIntegrationRuntimeManagedVnetIntegration | undefined) {
    if (value === undefined) {
      this._subnetName = undefined;
      this._vnetId = undefined;
    }
    else {
      this._subnetName = value.subnetName;
      this._vnetId = value.vnetId;
    }
  }

  // subnet_name - computed: false, optional: false, required: true
  private _subnetName?: string; 
  public get subnetName() {
    return this.getStringAttribute('subnet_name');
  }
  public set subnetName(value: string) {
    this._subnetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetNameInput() {
    return this._subnetName;
  }

  // vnet_id - computed: false, optional: false, required: true
  private _vnetId?: string; 
  public get vnetId() {
    return this.getStringAttribute('vnet_id');
  }
  public set vnetId(value: string) {
    this._vnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetIdInput() {
    return this._vnetId;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_managed.html azurerm_data_factory_integration_runtime_managed}
*/
export class DataFactoryIntegrationRuntimeManaged extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_data_factory_integration_runtime_managed";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/data_factory_integration_runtime_managed.html azurerm_data_factory_integration_runtime_managed} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFactoryIntegrationRuntimeManagedConfig
  */
  public constructor(scope: Construct, id: string, config: DataFactoryIntegrationRuntimeManagedConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_data_factory_integration_runtime_managed',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
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
    this._timeouts.internalValue = config.timeouts;
    this._vnetIntegration.internalValue = config.vnetIntegration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_factory_name - computed: false, optional: false, required: true
  private _dataFactoryName?: string; 
  public get dataFactoryName() {
    return this.getStringAttribute('data_factory_name');
  }
  public set dataFactoryName(value: string) {
    this._dataFactoryName = value;
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
  private _catalogInfo = new DataFactoryIntegrationRuntimeManagedCatalogInfoOutputReference(this as any, "catalog_info", true);
  public get catalogInfo() {
    return this._catalogInfo;
  }
  public putCatalogInfo(value: DataFactoryIntegrationRuntimeManagedCatalogInfo) {
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
  private _customSetupScript = new DataFactoryIntegrationRuntimeManagedCustomSetupScriptOutputReference(this as any, "custom_setup_script", true);
  public get customSetupScript() {
    return this._customSetupScript;
  }
  public putCustomSetupScript(value: DataFactoryIntegrationRuntimeManagedCustomSetupScript) {
    this._customSetupScript.internalValue = value;
  }
  public resetCustomSetupScript() {
    this._customSetupScript.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSetupScriptInput() {
    return this._customSetupScript.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataFactoryIntegrationRuntimeManagedTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataFactoryIntegrationRuntimeManagedTimeouts) {
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
  private _vnetIntegration = new DataFactoryIntegrationRuntimeManagedVnetIntegrationOutputReference(this as any, "vnet_integration", true);
  public get vnetIntegration() {
    return this._vnetIntegration;
  }
  public putVnetIntegration(value: DataFactoryIntegrationRuntimeManagedVnetIntegration) {
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
      catalog_info: dataFactoryIntegrationRuntimeManagedCatalogInfoToTerraform(this._catalogInfo.internalValue),
      custom_setup_script: dataFactoryIntegrationRuntimeManagedCustomSetupScriptToTerraform(this._customSetupScript.internalValue),
      timeouts: dataFactoryIntegrationRuntimeManagedTimeoutsToTerraform(this._timeouts.internalValue),
      vnet_integration: dataFactoryIntegrationRuntimeManagedVnetIntegrationToTerraform(this._vnetIntegration.internalValue),
    };
  }
}
