// https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/data-sources/shared_image_gallery
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzurermSharedImageGalleryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/data-sources/shared_image_gallery#id DataAzurermSharedImageGallery#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/data-sources/shared_image_gallery#name DataAzurermSharedImageGallery#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/data-sources/shared_image_gallery#resource_group_name DataAzurermSharedImageGallery#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/data-sources/shared_image_gallery#timeouts DataAzurermSharedImageGallery#timeouts}
  */
  readonly timeouts?: DataAzurermSharedImageGalleryTimeouts;
}
export interface DataAzurermSharedImageGalleryTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/data-sources/shared_image_gallery#read DataAzurermSharedImageGallery#read}
  */
  readonly read?: string;
}

export function dataAzurermSharedImageGalleryTimeoutsToTerraform(struct?: DataAzurermSharedImageGalleryTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataAzurermSharedImageGalleryTimeoutsToHclTerraform(struct?: DataAzurermSharedImageGalleryTimeouts | cdktf.IResolvable): any {
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

export class DataAzurermSharedImageGalleryTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAzurermSharedImageGalleryTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataAzurermSharedImageGalleryTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/data-sources/shared_image_gallery azurerm_shared_image_gallery}
*/
export class DataAzurermSharedImageGallery extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azurerm_shared_image_gallery";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAzurermSharedImageGallery resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAzurermSharedImageGallery to import
  * @param importFromId The id of the existing DataAzurermSharedImageGallery that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/data-sources/shared_image_gallery#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAzurermSharedImageGallery to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azurerm_shared_image_gallery", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/azurerm/3.113.0/docs/data-sources/shared_image_gallery azurerm_shared_image_gallery} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzurermSharedImageGalleryConfig
  */
  public constructor(scope: Construct, id: string, config: DataAzurermSharedImageGalleryConfig) {
    super(scope, id, {
      terraformResourceType: 'azurerm_shared_image_gallery',
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
    this._id = config.id;
    this._name = config.name;
    this._resourceGroupName = config.resourceGroupName;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // image_names - computed: true, optional: false, required: false
  public get imageNames() {
    return this.getListAttribute('image_names');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
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

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // unique_name - computed: true, optional: false, required: false
  public get uniqueName() {
    return this.getStringAttribute('unique_name');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAzurermSharedImageGalleryTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAzurermSharedImageGalleryTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      resource_group_name: cdktf.stringToTerraform(this._resourceGroupName),
      timeouts: dataAzurermSharedImageGalleryTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      resource_group_name: {
        value: cdktf.stringToHclTerraform(this._resourceGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: dataAzurermSharedImageGalleryTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataAzurermSharedImageGalleryTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
