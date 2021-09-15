// https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BatchPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#account_name BatchPool#account_name}
  */
  readonly accountName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#display_name BatchPool#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#max_tasks_per_node BatchPool#max_tasks_per_node}
  */
  readonly maxTasksPerNode?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#metadata BatchPool#metadata}
  */
  readonly metadata?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#name BatchPool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#node_agent_sku_id BatchPool#node_agent_sku_id}
  */
  readonly nodeAgentSkuId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#resource_group_name BatchPool#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#stop_pending_resize_operation BatchPool#stop_pending_resize_operation}
  */
  readonly stopPendingResizeOperation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#vm_size BatchPool#vm_size}
  */
  readonly vmSize: string;
  /**
  * auto_scale block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#auto_scale BatchPool#auto_scale}
  */
  readonly autoScale?: BatchPoolAutoScale[];
  /**
  * certificate block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#certificate BatchPool#certificate}
  */
  readonly certificate?: BatchPoolCertificate[];
  /**
  * container_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#container_configuration BatchPool#container_configuration}
  */
  readonly containerConfiguration?: BatchPoolContainerConfiguration[];
  /**
  * fixed_scale block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#fixed_scale BatchPool#fixed_scale}
  */
  readonly fixedScale?: BatchPoolFixedScale[];
  /**
  * network_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#network_configuration BatchPool#network_configuration}
  */
  readonly networkConfiguration?: BatchPoolNetworkConfiguration[];
  /**
  * start_task block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#start_task BatchPool#start_task}
  */
  readonly startTask?: BatchPoolStartTask[];
  /**
  * storage_image_reference block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#storage_image_reference BatchPool#storage_image_reference}
  */
  readonly storageImageReference: BatchPoolStorageImageReference[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#timeouts BatchPool#timeouts}
  */
  readonly timeouts?: BatchPoolTimeouts;
}
export interface BatchPoolAutoScale {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#evaluation_interval BatchPool#evaluation_interval}
  */
  readonly evaluationInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#formula BatchPool#formula}
  */
  readonly formula: string;
}

function batchPoolAutoScaleToTerraform(struct?: BatchPoolAutoScale): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    evaluation_interval: cdktf.stringToTerraform(struct!.evaluationInterval),
    formula: cdktf.stringToTerraform(struct!.formula),
  }
}

export interface BatchPoolCertificate {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#id BatchPool#id}
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#store_location BatchPool#store_location}
  */
  readonly storeLocation: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#store_name BatchPool#store_name}
  */
  readonly storeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#visibility BatchPool#visibility}
  */
  readonly visibility?: string[];
}

function batchPoolCertificateToTerraform(struct?: BatchPoolCertificate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    store_location: cdktf.stringToTerraform(struct!.storeLocation),
    store_name: cdktf.stringToTerraform(struct!.storeName),
    visibility: cdktf.listMapper(cdktf.stringToTerraform)(struct!.visibility),
  }
}

export interface BatchPoolContainerConfigurationContainerRegistries {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#password BatchPool#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#registry_server BatchPool#registry_server}
  */
  readonly registryServer?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#user_name BatchPool#user_name}
  */
  readonly userName?: string;
}

function batchPoolContainerConfigurationContainerRegistriesToTerraform(struct?: BatchPoolContainerConfigurationContainerRegistries): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    registry_server: cdktf.stringToTerraform(struct!.registryServer),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}

export interface BatchPoolContainerConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#container_image_names BatchPool#container_image_names}
  */
  readonly containerImageNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#container_registries BatchPool#container_registries}
  */
  readonly containerRegistries?: BatchPoolContainerConfigurationContainerRegistries[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#type BatchPool#type}
  */
  readonly type?: string;
}

function batchPoolContainerConfigurationToTerraform(struct?: BatchPoolContainerConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    container_image_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.containerImageNames),
    container_registries: cdktf.listMapper(batchPoolContainerConfigurationContainerRegistriesToTerraform)(struct!.containerRegistries),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface BatchPoolFixedScale {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#resize_timeout BatchPool#resize_timeout}
  */
  readonly resizeTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#target_dedicated_nodes BatchPool#target_dedicated_nodes}
  */
  readonly targetDedicatedNodes?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#target_low_priority_nodes BatchPool#target_low_priority_nodes}
  */
  readonly targetLowPriorityNodes?: number;
}

function batchPoolFixedScaleToTerraform(struct?: BatchPoolFixedScale): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    resize_timeout: cdktf.stringToTerraform(struct!.resizeTimeout),
    target_dedicated_nodes: cdktf.numberToTerraform(struct!.targetDedicatedNodes),
    target_low_priority_nodes: cdktf.numberToTerraform(struct!.targetLowPriorityNodes),
  }
}

export interface BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#access BatchPool#access}
  */
  readonly access: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#priority BatchPool#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#source_address_prefix BatchPool#source_address_prefix}
  */
  readonly sourceAddressPrefix: string;
}

function batchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesToTerraform(struct?: BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    access: cdktf.stringToTerraform(struct!.access),
    priority: cdktf.numberToTerraform(struct!.priority),
    source_address_prefix: cdktf.stringToTerraform(struct!.sourceAddressPrefix),
  }
}

export interface BatchPoolNetworkConfigurationEndpointConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#backend_port BatchPool#backend_port}
  */
  readonly backendPort: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#frontend_port_range BatchPool#frontend_port_range}
  */
  readonly frontendPortRange: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#name BatchPool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#protocol BatchPool#protocol}
  */
  readonly protocol: string;
  /**
  * network_security_group_rules block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#network_security_group_rules BatchPool#network_security_group_rules}
  */
  readonly networkSecurityGroupRules?: BatchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRules[];
}

function batchPoolNetworkConfigurationEndpointConfigurationToTerraform(struct?: BatchPoolNetworkConfigurationEndpointConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    backend_port: cdktf.numberToTerraform(struct!.backendPort),
    frontend_port_range: cdktf.stringToTerraform(struct!.frontendPortRange),
    name: cdktf.stringToTerraform(struct!.name),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    network_security_group_rules: cdktf.listMapper(batchPoolNetworkConfigurationEndpointConfigurationNetworkSecurityGroupRulesToTerraform)(struct!.networkSecurityGroupRules),
  }
}

export interface BatchPoolNetworkConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#public_address_provisioning_type BatchPool#public_address_provisioning_type}
  */
  readonly publicAddressProvisioningType?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#public_ips BatchPool#public_ips}
  */
  readonly publicIps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#subnet_id BatchPool#subnet_id}
  */
  readonly subnetId: string;
  /**
  * endpoint_configuration block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#endpoint_configuration BatchPool#endpoint_configuration}
  */
  readonly endpointConfiguration?: BatchPoolNetworkConfigurationEndpointConfiguration[];
}

function batchPoolNetworkConfigurationToTerraform(struct?: BatchPoolNetworkConfiguration): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    public_address_provisioning_type: cdktf.stringToTerraform(struct!.publicAddressProvisioningType),
    public_ips: cdktf.listMapper(cdktf.stringToTerraform)(struct!.publicIps),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    endpoint_configuration: cdktf.listMapper(batchPoolNetworkConfigurationEndpointConfigurationToTerraform)(struct!.endpointConfiguration),
  }
}

export interface BatchPoolStartTaskResourceFile {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#auto_storage_container_name BatchPool#auto_storage_container_name}
  */
  readonly autoStorageContainerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#blob_prefix BatchPool#blob_prefix}
  */
  readonly blobPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#file_mode BatchPool#file_mode}
  */
  readonly fileMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#file_path BatchPool#file_path}
  */
  readonly filePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#http_url BatchPool#http_url}
  */
  readonly httpUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#storage_container_url BatchPool#storage_container_url}
  */
  readonly storageContainerUrl?: string;
}

function batchPoolStartTaskResourceFileToTerraform(struct?: BatchPoolStartTaskResourceFile): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    auto_storage_container_name: cdktf.stringToTerraform(struct!.autoStorageContainerName),
    blob_prefix: cdktf.stringToTerraform(struct!.blobPrefix),
    file_mode: cdktf.stringToTerraform(struct!.fileMode),
    file_path: cdktf.stringToTerraform(struct!.filePath),
    http_url: cdktf.stringToTerraform(struct!.httpUrl),
    storage_container_url: cdktf.stringToTerraform(struct!.storageContainerUrl),
  }
}

export interface BatchPoolStartTaskUserIdentityAutoUser {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#elevation_level BatchPool#elevation_level}
  */
  readonly elevationLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#scope BatchPool#scope}
  */
  readonly scope?: string;
}

function batchPoolStartTaskUserIdentityAutoUserToTerraform(struct?: BatchPoolStartTaskUserIdentityAutoUser): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    elevation_level: cdktf.stringToTerraform(struct!.elevationLevel),
    scope: cdktf.stringToTerraform(struct!.scope),
  }
}

export interface BatchPoolStartTaskUserIdentity {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#user_name BatchPool#user_name}
  */
  readonly userName?: string;
  /**
  * auto_user block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#auto_user BatchPool#auto_user}
  */
  readonly autoUser?: BatchPoolStartTaskUserIdentityAutoUser[];
}

function batchPoolStartTaskUserIdentityToTerraform(struct?: BatchPoolStartTaskUserIdentity): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    user_name: cdktf.stringToTerraform(struct!.userName),
    auto_user: cdktf.listMapper(batchPoolStartTaskUserIdentityAutoUserToTerraform)(struct!.autoUser),
  }
}

export interface BatchPoolStartTask {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#command_line BatchPool#command_line}
  */
  readonly commandLine: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#environment BatchPool#environment}
  */
  readonly environment?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#max_task_retry_count BatchPool#max_task_retry_count}
  */
  readonly maxTaskRetryCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#wait_for_success BatchPool#wait_for_success}
  */
  readonly waitForSuccess?: boolean | cdktf.IResolvable;
  /**
  * resource_file block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#resource_file BatchPool#resource_file}
  */
  readonly resourceFile?: BatchPoolStartTaskResourceFile[];
  /**
  * user_identity block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#user_identity BatchPool#user_identity}
  */
  readonly userIdentity: BatchPoolStartTaskUserIdentity[];
}

function batchPoolStartTaskToTerraform(struct?: BatchPoolStartTask): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    command_line: cdktf.stringToTerraform(struct!.commandLine),
    environment: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.environment),
    max_task_retry_count: cdktf.numberToTerraform(struct!.maxTaskRetryCount),
    wait_for_success: cdktf.booleanToTerraform(struct!.waitForSuccess),
    resource_file: cdktf.listMapper(batchPoolStartTaskResourceFileToTerraform)(struct!.resourceFile),
    user_identity: cdktf.listMapper(batchPoolStartTaskUserIdentityToTerraform)(struct!.userIdentity),
  }
}

export interface BatchPoolStorageImageReference {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#id BatchPool#id}
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#offer BatchPool#offer}
  */
  readonly offer?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#publisher BatchPool#publisher}
  */
  readonly publisher?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#sku BatchPool#sku}
  */
  readonly sku?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#version BatchPool#version}
  */
  readonly version?: string;
}

function batchPoolStorageImageReferenceToTerraform(struct?: BatchPoolStorageImageReference): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    offer: cdktf.stringToTerraform(struct!.offer),
    publisher: cdktf.stringToTerraform(struct!.publisher),
    sku: cdktf.stringToTerraform(struct!.sku),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export interface BatchPoolTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#create BatchPool#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#delete BatchPool#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#read BatchPool#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html#update BatchPool#update}
  */
  readonly update?: string;
}

function batchPoolTimeoutsToTerraform(struct?: BatchPoolTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html azurerm_batch_pool}
*/
export class BatchPool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azurerm_batch_pool";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azurerm/r/batch_pool.html azurerm_batch_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BatchPoolConfig
  */
  public constructor(scope: Construct, id: string, config: BatchPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_batch_pool',
      terraformGeneratorMetadata: {
        providerName: 'azurerm'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accountName = config.accountName;
    this._displayName = config.displayName;
    this._maxTasksPerNode = config.maxTasksPerNode;
    this._metadata = config.metadata;
    this._name = config.name;
    this._nodeAgentSkuId = config.nodeAgentSkuId;
    this._resourceGroupName = config.resourceGroupName;
    this._stopPendingResizeOperation = config.stopPendingResizeOperation;
    this._vmSize = config.vmSize;
    this._autoScale = config.autoScale;
    this._certificate = config.certificate;
    this._containerConfiguration = config.containerConfiguration;
    this._fixedScale = config.fixedScale;
    this._networkConfiguration = config.networkConfiguration;
    this._startTask = config.startTask;
    this._storageImageReference = config.storageImageReference;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_name - computed: false, optional: false, required: true
  private _accountName: string;
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string ) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_tasks_per_node - computed: false, optional: true, required: false
  private _maxTasksPerNode?: number;
  public get maxTasksPerNode() {
    return this.getNumberAttribute('max_tasks_per_node');
  }
  public set maxTasksPerNode(value: number ) {
    this._maxTasksPerNode = value;
  }
  public resetMaxTasksPerNode() {
    this._maxTasksPerNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTasksPerNodeInput() {
    return this._maxTasksPerNode
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string } | cdktf.IResolvable;
  public get metadata() {
    return this.interpolationForAttribute('metadata') as any;
  }
  public set metadata(value: { [key: string]: string } | cdktf.IResolvable ) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata
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

  // node_agent_sku_id - computed: false, optional: false, required: true
  private _nodeAgentSkuId: string;
  public get nodeAgentSkuId() {
    return this.getStringAttribute('node_agent_sku_id');
  }
  public set nodeAgentSkuId(value: string) {
    this._nodeAgentSkuId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAgentSkuIdInput() {
    return this._nodeAgentSkuId
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

  // stop_pending_resize_operation - computed: false, optional: true, required: false
  private _stopPendingResizeOperation?: boolean | cdktf.IResolvable;
  public get stopPendingResizeOperation() {
    return this.getBooleanAttribute('stop_pending_resize_operation');
  }
  public set stopPendingResizeOperation(value: boolean | cdktf.IResolvable ) {
    this._stopPendingResizeOperation = value;
  }
  public resetStopPendingResizeOperation() {
    this._stopPendingResizeOperation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopPendingResizeOperationInput() {
    return this._stopPendingResizeOperation
  }

  // vm_size - computed: false, optional: false, required: true
  private _vmSize: string;
  public get vmSize() {
    return this.getStringAttribute('vm_size');
  }
  public set vmSize(value: string) {
    this._vmSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmSizeInput() {
    return this._vmSize
  }

  // auto_scale - computed: false, optional: true, required: false
  private _autoScale?: BatchPoolAutoScale[];
  public get autoScale() {
    return this.interpolationForAttribute('auto_scale') as any;
  }
  public set autoScale(value: BatchPoolAutoScale[] ) {
    this._autoScale = value;
  }
  public resetAutoScale() {
    this._autoScale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScaleInput() {
    return this._autoScale
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: BatchPoolCertificate[];
  public get certificate() {
    return this.interpolationForAttribute('certificate') as any;
  }
  public set certificate(value: BatchPoolCertificate[] ) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate
  }

  // container_configuration - computed: false, optional: true, required: false
  private _containerConfiguration?: BatchPoolContainerConfiguration[];
  public get containerConfiguration() {
    return this.interpolationForAttribute('container_configuration') as any;
  }
  public set containerConfiguration(value: BatchPoolContainerConfiguration[] ) {
    this._containerConfiguration = value;
  }
  public resetContainerConfiguration() {
    this._containerConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerConfigurationInput() {
    return this._containerConfiguration
  }

  // fixed_scale - computed: false, optional: true, required: false
  private _fixedScale?: BatchPoolFixedScale[];
  public get fixedScale() {
    return this.interpolationForAttribute('fixed_scale') as any;
  }
  public set fixedScale(value: BatchPoolFixedScale[] ) {
    this._fixedScale = value;
  }
  public resetFixedScale() {
    this._fixedScale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedScaleInput() {
    return this._fixedScale
  }

  // network_configuration - computed: false, optional: true, required: false
  private _networkConfiguration?: BatchPoolNetworkConfiguration[];
  public get networkConfiguration() {
    return this.interpolationForAttribute('network_configuration') as any;
  }
  public set networkConfiguration(value: BatchPoolNetworkConfiguration[] ) {
    this._networkConfiguration = value;
  }
  public resetNetworkConfiguration() {
    this._networkConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConfigurationInput() {
    return this._networkConfiguration
  }

  // start_task - computed: false, optional: true, required: false
  private _startTask?: BatchPoolStartTask[];
  public get startTask() {
    return this.interpolationForAttribute('start_task') as any;
  }
  public set startTask(value: BatchPoolStartTask[] ) {
    this._startTask = value;
  }
  public resetStartTask() {
    this._startTask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTaskInput() {
    return this._startTask
  }

  // storage_image_reference - computed: false, optional: false, required: true
  private _storageImageReference: BatchPoolStorageImageReference[];
  public get storageImageReference() {
    return this.interpolationForAttribute('storage_image_reference') as any;
  }
  public set storageImageReference(value: BatchPoolStorageImageReference[]) {
    this._storageImageReference = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageImageReferenceInput() {
    return this._storageImageReference
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: BatchPoolTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: BatchPoolTimeouts ) {
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
      account_name: cdktf.stringToTerraform(this._accountName),
      display_name: cdktf.stringToTerraform(this._displayName),
      max_tasks_per_node: cdktf.numberToTerraform(this._maxTasksPerNode),
      metadata: cdktf.hashMapper(cdktf.anyToTerraform)(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      node_agent_sku_id: cdktf.stringToTerraform(this._nodeAgentSkuId),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      stop_pending_resize_operation: cdktf.booleanToTerraform(this._stopPendingResizeOperation),
      vm_size: cdktf.stringToTerraform(this._vmSize),
      auto_scale: cdktf.listMapper(batchPoolAutoScaleToTerraform)(this._autoScale),
      certificate: cdktf.listMapper(batchPoolCertificateToTerraform)(this._certificate),
      container_configuration: cdktf.listMapper(batchPoolContainerConfigurationToTerraform)(this._containerConfiguration),
      fixed_scale: cdktf.listMapper(batchPoolFixedScaleToTerraform)(this._fixedScale),
      network_configuration: cdktf.listMapper(batchPoolNetworkConfigurationToTerraform)(this._networkConfiguration),
      start_task: cdktf.listMapper(batchPoolStartTaskToTerraform)(this._startTask),
      storage_image_reference: cdktf.listMapper(batchPoolStorageImageReferenceToTerraform)(this._storageImageReference),
      timeouts: batchPoolTimeoutsToTerraform(this._timeouts),
    };
  }
}
