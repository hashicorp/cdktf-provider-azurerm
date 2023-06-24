// https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/bot_service_azure_bot
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BotServiceAzureBotConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/bot_service_azure_bot#developer_app_insights_api_key BotServiceAzureBot#developer_app_insights_api_key}
  */
  readonly developerAppInsightsApiKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/bot_service_azure_bot#developer_app_insights_application_id BotServiceAzureBot#developer_app_insights_application_id}
  */
  readonly developerAppInsightsApplicationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/bot_service_azure_bot#developer_app_insights_key BotServiceAzureBot#developer_app_insights_key}
  */
  readonly developerAppInsightsKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/bot_service_azure_bot#display_name BotServiceAzureBot#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/bot_service_azure_bot#endpoint BotServiceAzureBot#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/bot_service_azure_bot#id BotServiceAzureBot#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/bot_service_azure_bot#location BotServiceAzureBot#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/bot_service_azure_bot#luis_app_ids BotServiceAzureBot#luis_app_ids}
  */
  readonly luisAppIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/bot_service_azure_bot#luis_key BotServiceAzureBot#luis_key}
  */
  readonly luisKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/bot_service_azure_bot#microsoft_app_id BotServiceAzureBot#microsoft_app_id}
  */
  readonly microsoftAppId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/bot_service_azure_bot#microsoft_app_msi_id BotServiceAzureBot#microsoft_app_msi_id}
  */
  readonly microsoftAppMsiId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/bot_service_azure_bot#microsoft_app_tenant_id BotServiceAzureBot#microsoft_app_tenant_id}
  */
  readonly microsoftAppTenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/bot_service_azure_bot#microsoft_app_type BotServiceAzureBot#microsoft_app_type}
  */
  readonly microsoftAppType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/bot_service_azure_bot#name BotServiceAzureBot#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/bot_service_azure_bot#resource_group_name BotServiceAzureBot#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/bot_service_azure_bot#sku BotServiceAzureBot#sku}
  */
  readonly sku: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/bot_service_azure_bot#streaming_endpoint_enabled BotServiceAzureBot#streaming_endpoint_enabled}
  */
  readonly streamingEndpointEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/bot_service_azure_bot#tags BotServiceAzureBot#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/bot_service_azure_bot#timeouts BotServiceAzureBot#timeouts}
  */
  readonly timeouts?: BotServiceAzureBotTimeouts;
}
export interface BotServiceAzureBotTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/bot_service_azure_bot#create BotServiceAzureBot#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/bot_service_azure_bot#delete BotServiceAzureBot#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/bot_service_azure_bot#read BotServiceAzureBot#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/bot_service_azure_bot#update BotServiceAzureBot#update}
  */
  readonly update?: string;
}

export function botServiceAzureBotTimeoutsToTerraform(struct?: BotServiceAzureBotTimeouts | cdktf.IResolvable): any {
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

export class BotServiceAzureBotTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BotServiceAzureBotTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BotServiceAzureBotTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/bot_service_azure_bot azurerm_bot_service_azure_bot}
*/
export class BotServiceAzureBot extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_bot_service_azure_bot";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.62.1/docs/resources/bot_service_azure_bot azurerm_bot_service_azure_bot} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BotServiceAzureBotConfig
  */
  public constructor(scope: Construct, id: string, config: BotServiceAzureBotConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_bot_service_azure_bot',
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
    this._developerAppInsightsApiKey = config.developerAppInsightsApiKey;
    this._developerAppInsightsApplicationId = config.developerAppInsightsApplicationId;
    this._developerAppInsightsKey = config.developerAppInsightsKey;
    this._displayName = config.displayName;
    this._endpoint = config.endpoint;
    this._id = config.id;
    this._location = config.location;
    this._luisAppIds = config.luisAppIds;
    this._luisKey = config.luisKey;
    this._microsoftAppId = config.microsoftAppId;
    this._microsoftAppMsiId = config.microsoftAppMsiId;
    this._microsoftAppTenantId = config.microsoftAppTenantId;
    this._microsoftAppType = config.microsoftAppType;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._sku = config.sku;
    this._streamingEndpointEnabled = config.streamingEndpointEnabled;
    this._tags = config.tags;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // developer_app_insights_api_key - computed: false, optional: true, required: false
  private _developerAppInsightsApiKey?: string; 
  public get developerAppInsightsApiKey() {
    return this.getStringAttribute('developer_app_insights_api_key');
  }
  public set developerAppInsightsApiKey(value: string) {
    this._developerAppInsightsApiKey = value;
  }
  public resetDeveloperAppInsightsApiKey() {
    this._developerAppInsightsApiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get developerAppInsightsApiKeyInput() {
    return this._developerAppInsightsApiKey;
  }

  // developer_app_insights_application_id - computed: false, optional: true, required: false
  private _developerAppInsightsApplicationId?: string; 
  public get developerAppInsightsApplicationId() {
    return this.getStringAttribute('developer_app_insights_application_id');
  }
  public set developerAppInsightsApplicationId(value: string) {
    this._developerAppInsightsApplicationId = value;
  }
  public resetDeveloperAppInsightsApplicationId() {
    this._developerAppInsightsApplicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get developerAppInsightsApplicationIdInput() {
    return this._developerAppInsightsApplicationId;
  }

  // developer_app_insights_key - computed: false, optional: true, required: false
  private _developerAppInsightsKey?: string; 
  public get developerAppInsightsKey() {
    return this.getStringAttribute('developer_app_insights_key');
  }
  public set developerAppInsightsKey(value: string) {
    this._developerAppInsightsKey = value;
  }
  public resetDeveloperAppInsightsKey() {
    this._developerAppInsightsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get developerAppInsightsKeyInput() {
    return this._developerAppInsightsKey;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
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

  // luis_app_ids - computed: false, optional: true, required: false
  private _luisAppIds?: string[]; 
  public get luisAppIds() {
    return this.getListAttribute('luis_app_ids');
  }
  public set luisAppIds(value: string[]) {
    this._luisAppIds = value;
  }
  public resetLuisAppIds() {
    this._luisAppIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get luisAppIdsInput() {
    return this._luisAppIds;
  }

  // luis_key - computed: false, optional: true, required: false
  private _luisKey?: string; 
  public get luisKey() {
    return this.getStringAttribute('luis_key');
  }
  public set luisKey(value: string) {
    this._luisKey = value;
  }
  public resetLuisKey() {
    this._luisKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get luisKeyInput() {
    return this._luisKey;
  }

  // microsoft_app_id - computed: false, optional: false, required: true
  private _microsoftAppId?: string; 
  public get microsoftAppId() {
    return this.getStringAttribute('microsoft_app_id');
  }
  public set microsoftAppId(value: string) {
    this._microsoftAppId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get microsoftAppIdInput() {
    return this._microsoftAppId;
  }

  // microsoft_app_msi_id - computed: false, optional: true, required: false
  private _microsoftAppMsiId?: string; 
  public get microsoftAppMsiId() {
    return this.getStringAttribute('microsoft_app_msi_id');
  }
  public set microsoftAppMsiId(value: string) {
    this._microsoftAppMsiId = value;
  }
  public resetMicrosoftAppMsiId() {
    this._microsoftAppMsiId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microsoftAppMsiIdInput() {
    return this._microsoftAppMsiId;
  }

  // microsoft_app_tenant_id - computed: false, optional: true, required: false
  private _microsoftAppTenantId?: string; 
  public get microsoftAppTenantId() {
    return this.getStringAttribute('microsoft_app_tenant_id');
  }
  public set microsoftAppTenantId(value: string) {
    this._microsoftAppTenantId = value;
  }
  public resetMicrosoftAppTenantId() {
    this._microsoftAppTenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microsoftAppTenantIdInput() {
    return this._microsoftAppTenantId;
  }

  // microsoft_app_type - computed: false, optional: true, required: false
  private _microsoftAppType?: string; 
  public get microsoftAppType() {
    return this.getStringAttribute('microsoft_app_type');
  }
  public set microsoftAppType(value: string) {
    this._microsoftAppType = value;
  }
  public resetMicrosoftAppType() {
    this._microsoftAppType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microsoftAppTypeInput() {
    return this._microsoftAppType;
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

  // sku - computed: false, optional: false, required: true
  private _sku?: string; 
  public get sku() {
    return this.getStringAttribute('sku');
  }
  public set sku(value: string) {
    this._sku = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku;
  }

  // streaming_endpoint_enabled - computed: false, optional: true, required: false
  private _streamingEndpointEnabled?: boolean | cdktf.IResolvable; 
  public get streamingEndpointEnabled() {
    return this.getBooleanAttribute('streaming_endpoint_enabled');
  }
  public set streamingEndpointEnabled(value: boolean | cdktf.IResolvable) {
    this._streamingEndpointEnabled = value;
  }
  public resetStreamingEndpointEnabled() {
    this._streamingEndpointEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamingEndpointEnabledInput() {
    return this._streamingEndpointEnabled;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BotServiceAzureBotTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BotServiceAzureBotTimeouts) {
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
      developer_app_insights_api_key: cdktf.stringToTerraform(this._developerAppInsightsApiKey),
      developer_app_insights_application_id: cdktf.stringToTerraform(this._developerAppInsightsApplicationId),
      developer_app_insights_key: cdktf.stringToTerraform(this._developerAppInsightsKey),
      display_name: cdktf.stringToTerraform(this._displayName),
      endpoint: cdktf.stringToTerraform(this._endpoint),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      luis_app_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._luisAppIds),
      luis_key: cdktf.stringToTerraform(this._luisKey),
      microsoft_app_id: cdktf.stringToTerraform(this._microsoftAppId),
      microsoft_app_msi_id: cdktf.stringToTerraform(this._microsoftAppMsiId),
      microsoft_app_tenant_id: cdktf.stringToTerraform(this._microsoftAppTenantId),
      microsoft_app_type: cdktf.stringToTerraform(this._microsoftAppType),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      sku: cdktf.stringToTerraform(this._sku),
      streaming_endpoint_enabled: cdktf.booleanToTerraform(this._streamingEndpointEnabled),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      timeouts: botServiceAzureBotTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
